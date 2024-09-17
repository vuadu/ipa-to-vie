# @vuadu/ipa-to-vie

Typescript code to Transcribe English IPA to Vietnamese Phonetic.

[![Version](https://img.shields.io/npm/v/@vuadu/ipa-to-vie.svg)](https://npmjs.org/package/@vuadu/ipa-to-vie)
[![Downloads/week](https://img.shields.io/npm/dw/@vuadu/ipa-to-vie.svg)](https://npmjs.org/package/@vuadu/ipa-to-vie)
[![License](https://img.shields.io/npm/l/@vuadu/ipa-to-vie.svg)](https://github.com/vuadu/ipa-to-vie/blob/main/package.json)
[![Test](https://github.com/vuadu/ipa-to-vie/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/vuadu/ipa-to-vie/actions/workflows/test.yml)

## Install

Using Yarn

```sh
yarn add @vuadu/ipa-to-vie
```

Using NPM

```sh
npm install @vuadu/ipa-to-vie
```

## Usage

### ipaToVie

#### Options

- `uppercaseStress`: boolean - uppercase stress syllable of vietnamese transcription

- `vowelEpenthesis`: object

|             |   type  |               description              |
|-------------|:-------:|----------------------------------------|
| skipAll     | boolean | Skip all syllables have null vowel     |
| skipLast    | boolean | Skip end syllable if it has null vowel |
| replacement |  string | Replace all null vowel with a string   |

#### Examples

```ts
import { ipaToVie } from '@vuadu/ipa-to-vie';

const viePhonetic = ipaToVie('/əˈkweɪntənsʃɪp/'); // acquaintanceship
console.log(viePhonetic) // ờ-quên-thờn-xờ-sịp
```

```ts
import { ipaToVie } from '@vuadu/ipa-to-vie';

const options = { uppercaseStress: true };

const viePhonetic = ipaToVie('/əˈkweɪntənsʃɪp/'); // acquaintanceship
console.log(viePhonetic) // ờ-QUÊN-thờn-xờ-sịp
```

```ts
import { ipaToVie } from '@vuadu/ipa-to-vie';

const options = { vowelEpenthesis: { skipAll: true } };

const viePhonetic = ipaToVie('/əˈkweɪntənsʃɪp/', options); // acquaintanceship
console.log(viePhonetic) // ờ-quên-thờn-sịp
```

```ts
import { ipaToVie } from '@vuadu/ipa-to-vie';

const options = { vowelEpenthesis: { replacement: "" } };

const viePhonetic = ipaToVie('/əˈkweɪntənsʃɪp/', options); // acquaintanceship
console.log(viePhonetic) // ờ-quên-thờn-x-sịp
```
