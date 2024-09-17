Word = " "* "/"? syllables:Syllable* "/"? " "* {
    return syllables
}
Syllable =
    stress:("ˈ" / "ˌ")? head:Consonant stress2:("ˈ" / "ˌ")? tail:SyllableEnding  {
      stress = stress || stress2 || /[ˈˌ]/.test(head) && head[0]
      return {
          stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
          parts: [head.replace(/[ˈˌ]/, ''), tail]
        }
    }
    / stress:("ˈ" / "ˌ")? head:Consonant {
      stress = stress || /[ˈˌ]/.test(head) && head[0]
      return {
          stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
	        parts: [head.replace(/[ˈˌ]/, ''), null]
        }
    }
    / stress:("ˈ" / "ˌ")? tail:SyllableEnding {
      return {
          stress: stress === 'ˈ' ? 1 : stress === 'ˌ' ? 2 : undefined,
          parts: [null, text().replace(/[ˈˌ]/, '')]
        }
    }
SyllableEnding =
    tail:((((Vowel EndingConsonant) / (DiphthongEnding)) !(Diphthong / Vowel)) / Diphthong / Vowel) {
    	return text();
    }

Consonant =
    "b"
    / "tʃ"
    / "tɹ"
    / "t"
    / "k" stress:("ˈ" / "ˌ")?  "w" { return (stress ?? '') + "kw" }
    / "k"
    / "z"
    / "ɹ"
    / "s"
    / "m"
    / "f"
    / "ɡ"
    / "n"
    / "ɫ"
    / "w"
    / "p"
    / "θ"
    / "v"
    / "h"
    / "ŋ"
    / "ʃ"
    / "ʒ"
    / "dʒ"
    / "d"
    / "ð"

EndingConsonant   =
    "b"
    / "t" !"ʃ" { return text() }
    / "k" !(("ˈ" / "ˌ")? "w") { return text() }
    / "m"
    / "ɡ"
    / "ɛ"
    / "n"
    / "e"
    / "p"
    / "h"
    / "ŋ"
DiphthongEnding = "eɪt" / "jəŋ" / "eɪn"
Diphthong = "oʊ" / "eɪ" / "aɪ" / "aʊ" / "ju" / "jə" / "jæ" / "jɑ" / "jʊ" / "jɛ" / "jɪ" / "jɔ" / "ji" / "joʊ" / "jaʊ" / "jeɪ" / "əj" / "ɔɪ"
Vowel = "a" / "ʊ" / "ə" / "ɔ" / "u" / "ɪ" / "o" / "ɛ" / "e" / "i" / "ɑ" / "ɝ" / "æ" / "j"
