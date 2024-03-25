const { ipaToVie } = require("../src/ipa-to-vie");

const words = [
  { word: "acquaintanceship", ipa: "/əˈkweɪntənsʃɪp/" },
  { word: "market", ipa: "/ˈmɑɹkət/, /ˈmɑɹkɪt/" }, //
  { word: "apply", ipa: "/əˈpɫaɪ/" },
  { word: "apple", ipa: "/ˈæpəɫ/" },
];

it("vieVowelEpenthesis default", async () => {
  const trans = {};

  words.map(({ word, ipa }) => {
    trans[word] = ipaToVie(ipa).map(({ vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-QUÂY-nờ-thờn-xờ-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "E-pờ-lờ",
    },
  ],
  "apply": [
    {
      "ipa": "/əˈpɫaɪ/",
      "vie": "ờ-PƠ-lài",
    },
  ],
  "market": [
    {
      "ipa": "/ˈmɑɹkət/, /ˈmɑɹkɪt/",
      "vie": "MA-rờ-kợt",
    },
    {
      "ipa": "/ˈmɑɹkət/, /ˈmɑɹkɪt/",
      "vie": "MA-rờ-kịt",
    },
  ],
}
`);
});

it("vieVowelEpenthesis skipAll", async () => {
  const options = {
    skipAll: true,
  };

  const trans = {};

  words.map(({ word, ipa }) => {
    trans[word] = ipaToVie(ipa, options).map(({ vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-QUÂY-thờn-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "E-pờ",
    },
  ],
  "apply": [
    {
      "ipa": "/əˈpɫaɪ/",
      "vie": "ờ-lài",
    },
  ],
  "market": [
    {
      "ipa": "/ˈmɑɹkət/, /ˈmɑɹkɪt/",
      "vie": "MA-kợt",
    },
    {
      "ipa": "/ˈmɑɹkət/, /ˈmɑɹkɪt/",
      "vie": "MA-kịt",
    },
  ],
}
`);
});

it("vieVowelEpenthesis skipLast", async () => {
  const options = {
    skipLast: true,
  };

  const trans = {};

  words.map(({ word, ipa }) => {
    trans[word] = ipaToVie(ipa, options).map(({ vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-QUÂY-nờ-thờn-xờ-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "E-pờ",
    },
  ],
  "apply": [
    {
      "ipa": "/əˈpɫaɪ/",
      "vie": "ờ-PƠ-lài",
    },
  ],
  "market": [
    {
      "ipa": "/ˈmɑɹkət/, /ˈmɑɹkɪt/",
      "vie": "MA-rờ-kợt",
    },
    {
      "ipa": "/ˈmɑɹkət/, /ˈmɑɹkɪt/",
      "vie": "MA-rờ-kịt",
    },
  ],
}
`);
});

it("vieVowelEpenthesis replacement", async () => {
  const options = {
    replacement: "xxx",
  };

  const trans = {};

  words.map(({ word, ipa }) => {
    trans[word] = ipaToVie(ipa, options).map(({ vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-QUÂY-nxxx-thờn-xxxx-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "E-pờ-lxxx",
    },
  ],
  "apply": [
    {
      "ipa": "/əˈpɫaɪ/",
      "vie": "ờ-PXXX-lài",
    },
  ],
  "market": [
    {
      "ipa": "/ˈmɑɹkət/, /ˈmɑɹkɪt/",
      "vie": "MA-rxxx-kợt",
    },
    {
      "ipa": "/ˈmɑɹkət/, /ˈmɑɹkɪt/",
      "vie": "MA-rxxx-kịt",
    },
  ],
}
`);
});
