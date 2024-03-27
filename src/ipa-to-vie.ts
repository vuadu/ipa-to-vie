import {
  COMBINE_ACUTE,
  COMBINE_DOT,
  COMBINE_GRAVE,
  ENDING_VOWEL_MAPPING,
  LETTER_MAPPING,
  NULL_MAPPING,
} from "./constants";
import { parse } from "./parser.generated";
import { IpaToVieOptions, SyllableToVieProps } from "./types";

export const addTonalMarkToVowel = (vie: string, tonalMark: string) => {
  let isAdded = false;
  let res = "";

  res = vie.replace(/ê|â|ă|ô|ơ|ư/i, (m) => {
    isAdded = true;
    return (m + tonalMark).normalize("NFC");
  });

  if (!isAdded) {
    res = vie.replace(/e|a|o|u|i/i, (m) => {
      isAdded = true;
      return (m + tonalMark).normalize("NFC");
    });
  }

  if (!isAdded) {
    res = vie.replace(/y/i, (m) => {
      return (m + tonalMark).normalize("NFC");
    });
  }

  return res;
};

export const addTonalMark = (vie: string, isStress?: boolean) => {
  if (/(ch|t|p|c)$/.test(vie)) {
    return addTonalMarkToVowel(vie, isStress ? COMBINE_ACUTE : COMBINE_DOT);
  } else if (!isStress) {
    return addTonalMarkToVowel(vie, COMBINE_GRAVE);
  } else return vie;
};

export const vieConsonantRule = (consonant: string, vowel: string) => {
  if (
    consonant === "k" &&
    ["a", "o", "u"].includes(vowel[0].normalize("NFD")[0])
  ) {
    return "c" + vowel;
  }
  if (consonant === "c" && ["e", "i"].includes(vowel[0].normalize("NFD")[0])) {
    return "k" + vowel;
  }

  return consonant + vowel;
};

export const syllableToVie = ({
  syllable,
  options,
  isLastSyllable,
}: SyllableToVieProps) => {
  const isNullVowel = ENDING_VOWEL_MAPPING[syllable.parts[1] ?? ""]
    ? false
    : true;

  let vieSyllable = `${LETTER_MAPPING[syllable.parts[0] ?? ""] ?? ""}${
    ENDING_VOWEL_MAPPING[syllable.parts[1] ?? ""] ?? NULL_MAPPING
  }`.replace(/wi|wa|wâ|we|wơ|ge|gi|gê|qui/g, (match) => {
    switch (match) {
      case "wi":
        return "uy";
      case "wa":
        return "oa";
      case "wâ":
        return "uâ";
      case "we":
        return "oe";
      case "wơ":
        return "uơ";
      case "ge":
        return "ghe";
      case "gi":
        return "ghi";
      case "gê":
        return "ghê";

      case "qui":
        return "quy";
      default:
        return "";
    }
  });

  if (isNullVowel) {
    if (
      options?.vowelEpenthesis?.skipAll ||
      (options?.vowelEpenthesis?.skipLast && isLastSyllable)
    )
      return "";
    vieSyllable = vieSyllable.replace(/._/g, (m) => {
      return vieConsonantRule(
        m[0],
        options?.vowelEpenthesis?.replacement ?? "ơ"
      );
    });
  } else {
    vieSyllable = vieSyllable
      .replace(/ki$|li$|mi$|si$|ti$|hi$/g, (match) => {
        switch (match) {
          case "ki":
            return "ky";
          case "li":
            return "ly";
          case "mi":
            return "my";
          case "si":
            return "sy";
          case "ti":
            return "ty";
          case "hi":
            return "hy";
          default:
            return "";
        }
      })
      .replace(/^k.|^c./g, (m) => vieConsonantRule(m[0], m[1]));
  }

  const sylWithTonal = addTonalMark(vieSyllable, syllable.stress);

  return options?.uppercaseStress && syllable.stress
    ? sylWithTonal.toLocaleUpperCase("vi")
    : sylWithTonal;
};

export const ipaToVie = (ipa: string, options?: IpaToVieOptions) => {
  return ipa.split(", ").flatMap((i) => {
    const cleaned = i
      .replaceAll("ɝˈ", "əˈɹ")
      .replaceAll("ɝ", "əɹ")
      .replaceAll("ˌ", "");
    try {
      const ast = parse(cleaned);
      if (ast.find((s) => /,/.test(s.parts[1] ?? ""))) {
        console.error(cleaned, ast);
      }
      const lastSyllableIdx = ast.length - 1;
      const vie = ast.reduce((acc, syllable, idx) => {
        const vieSyl = syllableToVie({
          syllable,
          options,
          isLastSyllable: idx === lastSyllableIdx,
        });
        return acc + (idx !== 0 && !!vieSyl ? "-" : "") + vieSyl;
      }, "");
      return [{ ipa: i, ast, vie }];
    } catch (e) {
      console.error(e, "-------------", JSON.stringify([ipa, i, cleaned]));
    }
    return [];
  });
};
