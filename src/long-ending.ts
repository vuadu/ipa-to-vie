import { ENDING_VOWEL_MAPPING } from "./constants";
import _ from "lodash";

console.log(
  _(ENDING_VOWEL_MAPPING)
    .keys()
    .filter((s) => s.length >= 3 && /[btkmɡɛnephŋ]$/.test(s))
    .value()
);
