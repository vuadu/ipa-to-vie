const { ipaToVie } = require("../src/ipa-to-vie");

const words = [
  { word: "acquaintanceship", ipa: "/əˈkweɪntənsʃɪp/" },
  { word: "market", ipa: "/ˈmɑɹkət/, /ˈmɑɹkɪt/" }, //
  { word: "apply", ipa: "/əˈpɫaɪ/" },
  { word: "apple", ipa: "/ˈæpəɫ/" },
  { word: "enjoy", ipa: "/ˌɛnˈdʒɔɪ/" },
  { word: "duck", ipa: "/ˈdək/" },
  { word: "dark", ipa: "/ˈdɑɹk/" },
  { word: "young", ipa: "/ˈjəŋ/" },
  { word: "chrome", ipa: "/ˈkɹoʊm/" },
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
      "vie": "ờ-pờ-lai",
    },
  ],
  "chrome": [
    {
      "ipa": "/ˈkɹoʊm/",
      "vie": "cờ-râu-mờ",
    },
  ],
  "dark": [
    {
      "ipa": "/ˈdɑɹk/",
      "vie": "đa-rờ-cờ",
    },
  ],
  "duck": [
    {
      "ipa": "/ˈdək/",
      "vie": "đấc",
    },
  ],
  "enjoy": [
    {
      "ipa": "/ˌɛnˈdʒɔɪ/",
      "vie": "èn-doi",
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
  "young": [
    {
      "ipa": "/ˈjəŋ/",
      "vie": "giang",
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
      "vie": "ờ-lai",
    },
  ],
  "chrome": [
    {
      "ipa": "/ˈkɹoʊm/",
      "vie": "-râu",
    },
  ],
  "dark": [
    {
      "ipa": "/ˈdɑɹk/",
      "vie": "đa",
    },
  ],
  "duck": [
    {
      "ipa": "/ˈdək/",
      "vie": "đấc",
    },
  ],
  "enjoy": [
    {
      "ipa": "/ˌɛnˈdʒɔɪ/",
      "vie": "èn-doi",
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
  "young": [
    {
      "ipa": "/ˈjəŋ/",
      "vie": "giang",
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
      "vie": "ờ-pờ-lai",
    },
  ],
  "chrome": [
    {
      "ipa": "/ˈkɹoʊm/",
      "vie": "cờ-râu",
    },
  ],
  "dark": [
    {
      "ipa": "/ˈdɑɹk/",
      "vie": "đa-rờ",
    },
  ],
  "duck": [
    {
      "ipa": "/ˈdək/",
      "vie": "đấc",
    },
  ],
  "enjoy": [
    {
      "ipa": "/ˌɛnˈdʒɔɪ/",
      "vie": "èn-doi",
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
  "young": [
    {
      "ipa": "/ˈjəŋ/",
      "vie": "giang",
    },
  ],
}
`);
});
it("vieVowelEpenthesis empty replacement", async () => {
  const options = {
    vowelEpenthesis: { replacement: "" },
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
      "vie": "ờ-quây-n-thờn-x-sịp",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈæpəɫ/",
      "vie": "e-pờ-l",
    },
  ],
  "apply": [
    {
      "ipa": "/əˈpɫaɪ/",
      "vie": "ờ-p-lai",
    },
  ],
  "chrome": [
    {
      "ipa": "/ˈkɹoʊm/",
      "vie": "k-râu-m",
    },
  ],
  "dark": [
    {
      "ipa": "/ˈdɑɹk/",
      "vie": "đa-r-k",
    },
  ],
  "duck": [
    {
      "ipa": "/ˈdək/",
      "vie": "đấc",
    },
  ],
  "enjoy": [
    {
      "ipa": "/ˌɛnˈdʒɔɪ/",
      "vie": "èn-doi",
    },
  ],
  "market": [
    {
      "ipa": "/ˈmɑɹkət/",
      "vie": "ma-r-cợt",
    },
    {
      "ipa": "/ˈmɑɹkɪt/",
      "vie": "ma-r-kịt",
    },
  ],
  "young": [
    {
      "ipa": "/ˈjəŋ/",
      "vie": "giang",
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
      "vie": "ờ-pxxx-lai",
    },
  ],
  "chrome": [
    {
      "ipa": "/ˈkɹoʊm/",
      "vie": "kxxx-râu-mxxx",
    },
  ],
  "dark": [
    {
      "ipa": "/ˈdɑɹk/",
      "vie": "đa-rxxx-kxxx",
    },
  ],
  "duck": [
    {
      "ipa": "/ˈdək/",
      "vie": "đấc",
    },
  ],
  "enjoy": [
    {
      "ipa": "/ˌɛnˈdʒɔɪ/",
      "vie": "èn-doi",
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
  "young": [
    {
      "ipa": "/ˈjəŋ/",
      "vie": "giang",
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
  { word: "classroom", ipa: "/ˈkɫæsˌɹum/" },
];

it("k & c rule", async () => {
  const trans = {};

  words2.map(({ word, ipa: i }) => {
    trans[word] =
      word === "cake"
        ? {
            ơ: ipaToVie(i).map(({ ipa, vie }) => ({ ipa, vie })),
            ui: ipaToVie(i, { vowelEpenthesis: { replacement: "ui" } }).map(({ ipa, vie }) => ({
              ipa,
              vie,
            })),
            i: ipaToVie(i, { vowelEpenthesis: { replacement: "i" } }).map(({ ipa, vie }) => ({
              ipa,
              vie,
            })),
            êu: ipaToVie(i, { vowelEpenthesis: { replacement: "êu" } }).map(({ ipa, vie }) => ({
              ipa,
              vie,
            })),
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
  "classroom": [
    {
      "ipa": "/ˈkɫæsˌɹum/",
      "vie": "cờ-le-xờ-rùm",
    },
  ],
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
    trans[word] = ipaToVie(i, { uppercaseStress: true }).map(({ ipa, vie }) => ({
      ipa,
      vie,
    }));
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
  "classroom": [
    {
      "ipa": "/ˈkɫæsˌɹum/",
      "vie": "cờ-LE-xờ-rùm",
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

const words3 = [
  { word: "classroom", ipa: "/ˈkɫæsˌɹum/" },
  { word: "straightforward", ipa: "/ˈstɹeɪtˈfɔɹwɝd/" },
  { word: "spray", ipa: "/ˈspɹeɪ/" },
  { word: "screw", ipa: "/ˈskɹu/" },
  { word: "squire", ipa: "/ˈskwaɪɹ/" },
];

it("CCV & CCCV stress", async () => {
  const trans = {};

  words3.map(({ word, ipa: i }) => {
    trans[word] = ipaToVie(i, { uppercaseStress: true });
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "classroom": [
    {
      "ast": [
        {
          "parts": [
            "k",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "ɫ",
            "æ",
          ],
          "stress": true,
        },
        {
          "parts": [
            "s",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "ɹ",
            "um",
          ],
          "stress": undefined,
        },
      ],
      "ipa": "/ˈkɫæsˌɹum/",
      "vie": "cờ-LE-xờ-rùm",
    },
  ],
  "screw": [
    {
      "ast": [
        {
          "parts": [
            "s",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "k",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "ɹ",
            "u",
          ],
          "stress": true,
        },
      ],
      "ipa": "/ˈskɹu/",
      "vie": "xờ-cờ-RU",
    },
  ],
  "spray": [
    {
      "ast": [
        {
          "parts": [
            "s",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "p",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "ɹ",
            "eɪ",
          ],
          "stress": true,
        },
      ],
      "ipa": "/ˈspɹeɪ/",
      "vie": "xờ-pờ-RÂY",
    },
  ],
  "squire": [
    {
      "ast": [
        {
          "parts": [
            "s",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "kw",
            "aɪ",
          ],
          "stress": true,
        },
        {
          "parts": [
            "ɹ",
            null,
          ],
          "stress": undefined,
        },
      ],
      "ipa": "/ˈskwaɪɹ/",
      "vie": "xờ-QUAI-rờ",
    },
  ],
  "straightforward": [
    {
      "ast": [
        {
          "parts": [
            "s",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "tɹ",
            "eɪ",
          ],
          "stress": true,
        },
        {
          "parts": [
            "t",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "f",
            "ɔ",
          ],
          "stress": true,
        },
        {
          "parts": [
            "ɹ",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "w",
            "ə",
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "ɹ",
            null,
          ],
          "stress": undefined,
        },
        {
          "parts": [
            "d",
            null,
          ],
          "stress": undefined,
        },
      ],
      "ipa": "/ˈstɹeɪtˈfɔɹwɝd/",
      "vie": "xờ-TRÂY-thờ-PHO-rờ-uờ-rờ-đờ",
    },
  ],
}
`);
});
