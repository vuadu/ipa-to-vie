import { Syllable } from "./parser";

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
