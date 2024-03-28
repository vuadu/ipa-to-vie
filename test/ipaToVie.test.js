const { ipaToVie } = require("../src/ipa-to-vie");

const words = [
  { word: "acquaintanceship", ipa: "/əˈkweɪntənsʃɪp/" },
  { word: "market", ipa: "/ˈmɑɹkət/, /ˈmɑɹkɪt/" }, //
  { word: "apply", ipa: "/əˈpɫaɪ/" },
  { word: "apple", ipa: "/ˈæpəɫ/" },
];

it("vieVowelEpenthesis default", async () => {
  const trans = {};

  words.map(({ word, ipa: i }) => {
    trans[word] = ipaToVie(i).map(({ ipa, vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quây-nờ-thờn-xờ-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "e-pờ-lờ",
    },
  ],
  "apply": [
    {
      "ipa": "/əˈpɫaɪ/",
      "vie": "ờ-pơ-lài",
    },
  ],
  "market": [
    {
      "ipa": "/ˈmɑɹkət/",
      "vie": "ma-rờ-cợt",
    },
    {
      "ipa": "/ˈmɑɹkɪt/",
      "vie": "ma-rờ-kịt",
    },
  ],
}
`);
});

it("vieVowelEpenthesis skipAll", async () => {
  const options = {
    vowelEpenthesis: { skipAll: true },
  };

  const trans = {};

  words.map(({ word, ipa: i }) => {
    trans[word] = ipaToVie(i, options).map(({ ipa, vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quây-thờn-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "e-pờ",
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
      "ipa": "/ˈmɑɹkət/",
      "vie": "ma-cợt",
    },
    {
      "ipa": "/ˈmɑɹkɪt/",
      "vie": "ma-kịt",
    },
  ],
}
`);
});

it("vieVowelEpenthesis skipLast", async () => {
  const options = {
    vowelEpenthesis: { skipLast: true },
  };

  const trans = {};

  words.map(({ word, ipa: i }) => {
    trans[word] = ipaToVie(i, options).map(({ ipa, vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quây-nờ-thờn-xờ-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "e-pờ",
    },
  ],
  "apply": [
    {
      "ipa": "/əˈpɫaɪ/",
      "vie": "ờ-pơ-lài",
    },
  ],
  "market": [
    {
      "ipa": "/ˈmɑɹkət/",
      "vie": "ma-rờ-cợt",
    },
    {
      "ipa": "/ˈmɑɹkɪt/",
      "vie": "ma-rờ-kịt",
    },
  ],
}
`);
});

it("vieVowelEpenthesis replacement", async () => {
  const options = {
    vowelEpenthesis: { replacement: "xxx" },
  };

  const trans = {};

  words.map(({ word, ipa: i }) => {
    trans[word] = ipaToVie(i, options).map(({ ipa, vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quây-nxxx-thờn-xxxx-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "e-pờ-lxxx",
    },
  ],
  "apply": [
    {
      "ipa": "/əˈpɫaɪ/",
      "vie": "ờ-pxxx-lài",
    },
  ],
  "market": [
    {
      "ipa": "/ˈmɑɹkət/",
      "vie": "ma-rxxx-cợt",
    },
    {
      "ipa": "/ˈmɑɹkɪt/",
      "vie": "ma-rxxx-kịt",
    },
  ],
}
`);
});

const words2 = [
  { word: "cache", ipa: "/ˈkæʃ/, /kæˈʃeɪ/" },
  { word: "cake", ipa: "/ˈkeɪk/" },
  { word: "moscow", ipa: "/ˈmɑˌskoʊ/, /ˈmɔˌskaʊ/" },
  { word: "pick", ipa: "/ˈpɪk/" },
];

it("k & c rule", async () => {
  const trans = {};

  words2.map(({ word, ipa: i }) => {
    trans[word] =
      word === "cake"
        ? {
            ơ: ipaToVie(i).map(({ ipa, vie }) => ({ ipa, vie })),
            ui: ipaToVie(i, { vowelEpenthesis: { replacement: "ui" } }).map(
              ({ ipa, vie }) => ({
                ipa,
                vie,
              })
            ),
            i: ipaToVie(i, { vowelEpenthesis: { replacement: "i" } }).map(
              ({ ipa, vie }) => ({
                ipa,
                vie,
              })
            ),
            êu: ipaToVie(i, { vowelEpenthesis: { replacement: "êu" } }).map(
              ({ ipa, vie }) => ({
                ipa,
                vie,
              })
            ),
          }
        : ipaToVie(i).map(({ ipa, vie }) => ({
            ipa,
            vie,
          }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "cache": [
    {
      "ipa": "/ˈkæʃ/",
      "vie": "ke-sờ",
    },
    {
      "ipa": "/kæˈʃeɪ/",
      "vie": "kè-sây",
    },
  ],
  "cake": {
    "i": [
      {
        "ipa": "/ˈkeɪk/",
        "vie": "cây-kì",
      },
    ],
    "ui": [
      {
        "ipa": "/ˈkeɪk/",
        "vie": "cây-cùi",
      },
    ],
    "êu": [
      {
        "ipa": "/ˈkeɪk/",
        "vie": "cây-kều",
      },
    ],
    "ơ": [
      {
        "ipa": "/ˈkeɪk/",
        "vie": "cây-cờ",
      },
    ],
  },
  "moscow": [
    {
      "ipa": "/ˈmɑˌskoʊ/",
      "vie": "ma-xờ-cầu",
    },
    {
      "ipa": "/ˈmɔˌskaʊ/",
      "vie": "mo-xờ-cào",
    },
  ],
  "pick": [
    {
      "ipa": "/ˈpɪk/",
      "vie": "pích",
    },
  ],
}
`);
});

it("uppercase stress", async () => {
  const trans = {};

  words2.map(({ word, ipa: i }) => {
    trans[word] = ipaToVie(i, { uppercaseStress: true }).map(
      ({ ipa, vie }) => ({
        ipa,
        vie,
      })
    );
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "cache": [
    {
      "ipa": "/ˈkæʃ/",
      "vie": "KE-sờ",
    },
    {
      "ipa": "/kæˈʃeɪ/",
      "vie": "kè-SÂY",
    },
  ],
  "cake": [
    {
      "ipa": "/ˈkeɪk/",
      "vie": "CÂY-cờ",
    },
  ],
  "moscow": [
    {
      "ipa": "/ˈmɑˌskoʊ/",
      "vie": "MA-xờ-cầu",
    },
    {
      "ipa": "/ˈmɔˌskaʊ/",
      "vie": "MO-xờ-cào",
    },
  ],
  "pick": [
    {
      "ipa": "/ˈpɪk/",
      "vie": "PÍCH",
    },
  ],
}
`);
});
