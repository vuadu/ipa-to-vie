import { Syllable } from "./parser.generated";

export interface SyllableToVieProps {
  syllable: Syllable;
  options?: VieVowelEpenthesisOptions;
  isLastSyllable?: boolean;
}

export type VieVowelEpenthesisOptions = {
  skipAll?: boolean;
  skipLast?: boolean;
  replacement?: string;
};
