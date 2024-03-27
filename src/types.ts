import { Syllable } from "./parser.generated";

export type VieVowelEpenthesisOptions = {
  skipAll?: boolean;
  skipLast?: boolean;
  replacement?: string;
};

export type IpaToVieOptions = {
  uppercaseStress?: boolean;
  vowelEpenthesis?: VieVowelEpenthesisOptions;
};

export interface SyllableToVieProps {
  syllable: Syllable;
  options?: IpaToVieOptions;
  isLastSyllable?: boolean;
}
