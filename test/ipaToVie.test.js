const { ipaToVie } = require("../src/ipa-to-vie");

const words = [
  { word: "acquaintanceship", ipa: "/əˈkweɪntənsʃɪp/" },
  { word: "acquaintance", ipa: "/əkˈweɪntəns/" },
  { word: "market", ipa: "/ˈmɑɹkət/, /ˈmɑɹkɪt/" }, //
  { word: "apply", ipa: "/əˈpɫaɪ/" },
  { word: "apple", ipa: "/ˈæpəɫ/" },
  { word: "enjoy", ipa: "/ˌɛnˈdʒɔɪ/" },
  { word: "duck", ipa: "/ˈdək/" },
  { word: "dark", ipa: "/ˈdɑɹk/" },
  { word: "young", ipa: "/ˈjəŋ/" },
  { word: "chrome", ipa: "/ˈkɹoʊm/" },
  { word: "angel", ipa: "/ˈeɪndʒəɫ/" },
  { word: "McDonald's", ipa: "/məkdˈɑnəɫdz/" },
  { word: "Responsibility", ipa: "/ɹiˌspɑnsəˈbɪɫəti/" },
  { word: "eight", ipa: "/ˈeɪt/" },
  { word: "apple", ipa: "/ˈeɪpɹəɫ/" },
  { word: "owns", ipa: "/ˈoʊnz/" },
];

it("vieVowelEpenthesis default", async () => {
  const trans = {};

  words.map(({ word, ipa: i }) => {
    trans[word] = ipaToVie(i).map(({ ipa, vie }) => ({ ipa, vie }));
  });

  expect(trans).toMatchInlineSnapshot(`
{
  "McDonald's": [
    {
      "ipa": "/məkdˈɑnəɫdz/",
      "vie": "mợc-đa-nờ-lờ-đờ-dờ",
    },
  ],
  "Responsibility": [
    {
      "ipa": "/ɹiˌspɑnsəˈbɪɫəti/",
      "vie": "rì-xờ-pan-xờ-bi-lờ-thỳ",
    },
  ],
  "acquaintance": [
    {
      "ipa": "/əkˈweɪntəns/",
      "vie": "ờ-quên-thờn-xờ",
    },
  ],
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quên-thờn-xờ-sịp",
    },
  ],
  "angel": [
    {
      "ipa": "/ˈeɪndʒəɫ/",
      "vie": "ên-dờ-lờ",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈeɪpɹəɫ/",
      "vie": "ây-pờ-rờ-lờ",
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
      "vie": "đớc",
    },
  ],
  "eight": [
    {
      "ipa": "/ˈeɪt/",
      "vie": "ết",
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
  "owns": [
    {
      "ipa": "/ˈoʊnz/",
      "vie": "âu-nờ-dờ",
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
  "McDonald's": [
    {
      "ipa": "/məkdˈɑnəɫdz/",
      "vie": "mợc-đa-nờ",
    },
  ],
  "Responsibility": [
    {
      "ipa": "/ɹiˌspɑnsəˈbɪɫəti/",
      "vie": "rì-pan-xờ-bi-lờ-thỳ",
    },
  ],
  "acquaintance": [
    {
      "ipa": "/əkˈweɪntəns/",
      "vie": "ờ-quên-thờn",
    },
  ],
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quên-thờn-sịp",
    },
  ],
  "angel": [
    {
      "ipa": "/ˈeɪndʒəɫ/",
      "vie": "ên-dờ",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈeɪpɹəɫ/",
      "vie": "ây-rờ",
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
      "vie": "đớc",
    },
  ],
  "eight": [
    {
      "ipa": "/ˈeɪt/",
      "vie": "ết",
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
  "owns": [
    {
      "ipa": "/ˈoʊnz/",
      "vie": "âu",
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
  "McDonald's": [
    {
      "ipa": "/məkdˈɑnəɫdz/",
      "vie": "mợc-đa-nờ-lờ-đờ",
    },
  ],
  "Responsibility": [
    {
      "ipa": "/ɹiˌspɑnsəˈbɪɫəti/",
      "vie": "rì-xờ-pan-xờ-bi-lờ-thỳ",
    },
  ],
  "acquaintance": [
    {
      "ipa": "/əkˈweɪntəns/",
      "vie": "ờ-quên-thờn",
    },
  ],
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quên-thờn-xờ-sịp",
    },
  ],
  "angel": [
    {
      "ipa": "/ˈeɪndʒəɫ/",
      "vie": "ên-dờ",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈeɪpɹəɫ/",
      "vie": "ây-pờ-rờ",
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
      "vie": "đớc",
    },
  ],
  "eight": [
    {
      "ipa": "/ˈeɪt/",
      "vie": "ết",
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
  "owns": [
    {
      "ipa": "/ˈoʊnz/",
      "vie": "âu-nờ",
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
  "McDonald's": [
    {
      "ipa": "/məkdˈɑnəɫdz/",
      "vie": "mợc-đa-nờ-l-đ-d",
    },
  ],
  "Responsibility": [
    {
      "ipa": "/ɹiˌspɑnsəˈbɪɫəti/",
      "vie": "rì-x-pan-xờ-bi-lờ-thỳ",
    },
  ],
  "acquaintance": [
    {
      "ipa": "/əkˈweɪntəns/",
      "vie": "ờ-quên-thờn-x",
    },
  ],
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quên-thờn-x-sịp",
    },
  ],
  "angel": [
    {
      "ipa": "/ˈeɪndʒəɫ/",
      "vie": "ên-dờ-l",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈeɪpɹəɫ/",
      "vie": "ây-p-rờ-l",
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
      "vie": "đớc",
    },
  ],
  "eight": [
    {
      "ipa": "/ˈeɪt/",
      "vie": "ết",
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
  "owns": [
    {
      "ipa": "/ˈoʊnz/",
      "vie": "âu-n-d",
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
  "McDonald's": [
    {
      "ipa": "/məkdˈɑnəɫdz/",
      "vie": "mợc-đa-nờ-lxxx-đxxx-dxxx",
    },
  ],
  "Responsibility": [
    {
      "ipa": "/ɹiˌspɑnsəˈbɪɫəti/",
      "vie": "rì-xxxx-pan-xờ-bi-lờ-thỳ",
    },
  ],
  "acquaintance": [
    {
      "ipa": "/əkˈweɪntəns/",
      "vie": "ờ-quên-thờn-xxxx",
    },
  ],
  "acquaintanceship": [
    {
      "ipa": "/əˈkweɪntənsʃɪp/",
      "vie": "ờ-quên-thờn-xxxx-sịp",
    },
  ],
  "angel": [
    {
      "ipa": "/ˈeɪndʒəɫ/",
      "vie": "ên-dờ-lxxx",
    },
  ],
  "apple": [
    {
      "ipa": "/ˈeɪpɹəɫ/",
      "vie": "ây-pxxx-rờ-lxxx",
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
      "vie": "đớc",
    },
  ],
  "eight": [
    {
      "ipa": "/ˈeɪt/",
      "vie": "ết",
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
  "owns": [
    {
      "ipa": "/ˈoʊnz/",
      "vie": "âu-nxxx-dxxx",
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
          "stress": 1,
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
          "stress": 1,
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
          "stress": 1,
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
          "stress": 1,
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
            "eɪt",
          ],
          "stress": 1,
        },
        {
          "parts": [
            "f",
            "ɔ",
          ],
          "stress": 1,
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
      "vie": "xờ-TRẾT-PHO-rờ-uờ-rờ-đờ",
    },
  ],
}
`);
});
