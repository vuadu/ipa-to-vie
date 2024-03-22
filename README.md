# ipa-to-vie

Typescript code to Transcribe English IPA to Vietnamese Phonetic.

## Install

Using Yarn

```sh
yarn add ipa-to-vie
```

Using NPM

```sh
npm install ipa-to-vie
```

## Usage

### ipaToVie

#### Options

Vowel Epenthesis options for Vietnamese transcription

|             |   type  |               description              |
|-------------|:-------:|----------------------------------------|
| skipAll     | boolean | Skip all syllables have null vowel     |
| skipLast    | boolean | Skip end syllable if it has null vowel |
| replacement |  string | Replace all null vowel with a string   |

#### Examples

```ts
import { ipaToVie } from 'ipa-to-vie';

const viePhonetic = ipaToVie('/əˈkweɪntənsʃɪp/'); // acquaintanceship
console.log(viePhonetic) // ờ-QUÂY-n_-thờn-x_-sịp
```

```ts
import { ipaToVie } from 'ipa-to-vie';

const options = { skipAll: true };

const viePhonetic = ipaToVie('/əˈkweɪntənsʃɪp/', options); // acquaintanceship
console.log(viePhonetic) // ờ-QUÂY-thờn-sịp
```

```ts
import { ipaToVie } from 'ipa-to-vie';

const options = { replacement: "ơ" };

const viePhonetic = ipaToVie('/əˈkweɪntənsʃɪp/', options); // acquaintanceship
console.log(viePhonetic) // ờ-QUÂY-nờ-thờn-xờ-sịp
```
