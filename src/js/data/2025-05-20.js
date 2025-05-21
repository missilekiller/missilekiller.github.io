dataSetVersion = "2025-05-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Octopath Traveler", key: "i" },
      { name: "Octopath Traveler II", key: "ii" },
      { name: "Champions of the Continent", key: "cotc" },
    ]
  },
  {
    name: "Filter by Character Story",
    key: "story",
    tooltip: "Check this to restrict to certain stories.",
    checked: false,
    sub: [
      { name: "Ochette", key: "oct" },
      { name: "Castti", key: "cas" },
      { name: "Throne", key: "thr" },
      { name: "Osvald", key: "osv"},
      { name: "Partitio", key: "par"},
      { name: "Agnea", key: "agn"},
      { name: "Temenos", key: "tem"},
      { name: "Hikari", key: "hik"},
      { name: "Other", key: "oth"},
    ]
  },
  {
    name: "Filter NPCs",
    key: "npc",
    tooltip: 'Check this if you want to remove NPCs from being listed.',
    checked: false,
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Ochette",
    img: "b9P2SXK.jpeg",
    opts: {
      series: ["ii"],
      story: ["oct"],
    }
  },
  {
    name: "Castti",
    img: "UD7t3qQ.jpeg",
    opts: {
      series: ["ii"],
      story: ["cas"],
    }
  },
  {
    name: "Throne",
    img: "rqKt2Ng.jpeg",
    opts: {
      series: ["ii"],
    }
  },
  {
    name: "Osvald",
    img: "A0539m9.jpeg",
    opts: {
      series: ["ii"],
    }
  },
  {
    name: "Partitio",
    img: "4qRz8Vj.jpeg",
    opts: {
      series: ["ii"],
    }
  },
  {
    name: "Agnea",
    img: "1QxCF5L.jpeg",
    opts: {
      series: ["ii"],
    }
  },
  {
    name: "Temenos",
    img: "N0Yom2L.jpeg",
    opts: {
      series: ["ii"],
    }
  },
  {
    name: "Hikari",
    img: "dq4gaEe.jpeg",
    opts: {
      series: ["ii"],
    }
  },
  {
    name: "Acta",
    img: "ASLK72X.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Akala",
    img: "UPQ0tWp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Alpione",
    img: "saO7iaX.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Cohazeh",
    img: "rtNiE0i.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Glacis",
    img: "jjp9EOp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Heig",
    img: "E2ubszE.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Juvah",
    img: "7vvG6dY.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Mahina",
    img: "kfFtnM6.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Pom",
    img: "1Ua2nTk.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Tera",
    img: "IPO1pjY.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Andy",
    img: "9ATgH4z.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Doron and Veron",
    img: "1GYKJSr.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Edmund",
    img: "BcmUvnh.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Elma",
    img: "ZlD2Wtb.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Greg",
    img: "ig0ZbZR.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Commander Griff",
    img: "2GvWf6t.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Lily",
    img: "jBzQ74i.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Malaya",
    img: "6NqFFPs.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Mao",
    img: "c1j8sjx.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Melia",
    img: "oiaCKx7.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Mikk and Makk",
    img: "Ii5Ugzz.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Plukk",
    img: "Hdg7wqU.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Randy",
    img: "XBfUy45.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Rosa",
    img: "9jYQQYD.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Sally",
    img: "6zFVmP0.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Bergomi",
    img: "SqLsLj6.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "Claude",
    img: "y3iDm3N.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },  {
    name: "Donnie",
    img: "ECp8Wpl.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "Father",
    img: "NgsFdJr.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "Marietta",
    img: "wYhgRoC.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "The Masked Boy",
    img: "UC56J2V.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "Mira",
    img: "aWYfK9X.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "Mother",
    img: "WH2YyVr.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "Pirro",
    img: "JNIgBiX.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "Scaracchi",
    img: "kONkWu5.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },
  {
    name: "The Slaver",
    img: "IChL3jj.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"],
    }
  },  {
    name: "Bale",
    img: "kZIDhei.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"],
    }
  },
  {
    name: "Lady Clarissa",
    img: "k1m4HzM.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"],
    }
  },
  {
    name: "Warden Davids",
    img: "IlrnGRz.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"],
    }
  },
  {
    name: "Elena",
    img: "ncddVs8.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"],
    }
  },
  {
    name: "Emerald",
    img: "iHch8SU.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"],
    }
  },
  {
    name: "Harvey",
    img: "ZOFWhu2.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"],
    }
  },
  {
    name: "Rita",
    img: "BT8JApd.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"],
    }
  },
  {
    name: "Captain Stenvar",
    img: "479HE93.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"],
    }
  },
  {
    name: "Alrond",
    img: "qkRlfXY.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Floyd",
    img: "7Jjz4VM.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Garnet",
    img: "QeL6Pgq.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Giff",
    img: "KikVHqH.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Misha",
    img: "VrVGZ5Y.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Ori",
    img: "VrxA9bm.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },  {
    name: "Papp",
    img: "X6Zcfwj.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Roque",
    img: "w3qJbcm.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Terry",
    img: "lz9f9Jd.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Thurston",
    img: "wNZUu8N.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },
  {
    name: "Will",
    img: "uN9g375.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["par"],
    }
  },  {
    name: "Coda",
    img: "zboUraJ.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Cuani",
    img: "LIMSo8n.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Dolcinaea",
    img: "KbeSDh1.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Garud",
    img: "wC875GB.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Gil",
    img: "IEfmGa7.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Giselle",
    img: "m6rGA04.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Gus",
    img: "D4WJlKs.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },  {
    name: "Laila",
    img: "bebspZ4.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "La'mani",
    img: "rI5Q3dp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Pala",
    img: "dTTP9Yy.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Rico",
    img: "bUEmNXV.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Tanzy",
    img: "o2DFu8O.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Veronica",
    img: "Z4jYXGb.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"],
    }
  },
  {
    name: "Mindt",
    img: "c9eiPJk.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Crick",
    img: "xxdzy0Z.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Cubaryi",
    img: "HTPm401.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Felvarg",
    img: "5c0rxGz.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Hermes",
    img: "otuSXds.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },  {
    name: "Pontif Jorg",
    img: "aR3maXi.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Kaldena",
    img: "FzXTjTy.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Ort",
    img: "4vN2ORY.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Reiza",
    img: "on6j0vJ.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Roi",
    img: "JvTpInG.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Shirlutto",
    img: "iWupAHx.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Vados",
    img: "E9uRYoL.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["tem"],
    }
  },
  {
    name: "Ageha",
    img: "dwspS94.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Bandelam",
    img: "ga89y1m.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Benkei",
    img: "QWNT4qC.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Borneau",
    img: "wJhD4t1.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Jigo",
    img: "MqbfeLc.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Kunzo",
    img: "YWmODbP.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Kura",
    img: "cqSRQkQ.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Rai Mei",
    img: "nHWdmmr.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "General Mugen",
    img: "1hk3QVl.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Kazan",
    img: "2Fhj5dO.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },  {
    name: "Ritsu",
    img: "03Pc51l.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "General Rou",
    img: "ui5Urfp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Shadow Hikari",
    img: "3rxLyf6.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Zeto the Butcher",
    img: "2CCHVgp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Jin Mei",
    img: "bAPuozo.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Mikka",
    img: "ZLCd6at.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "King of Sa",
    img: "spoWwxl.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["hik"],
    }
  },
  {
    name: "Al",
    img: "mPSdm7O.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oth"],
    }
  },  {
    name: "Alpates",
    img: "HRrMjro.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr"], ["tem"],
    }
  },
  {
    name: "Arkar",
    img: "r6w1eAC.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oth"]
    }
  },
  {
    name: "Petrichor",
    img: "PeQpKRp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"],
    }
  },
  {
    name: "Porta",
    img: "DBaBi0q.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oth"],
    }
  },
  {
    name: "Regulus",
    img: "wM6Z4fF.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["osv"], ["par"],
    }
  },
  {
    name: "Wooly-Ooly",
    img: "3xFqvxI.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["oct"], ["cas"],
    }
  },
  {
    name: "Yomi",
    img: "pwHNAfA.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn"], ["hik"]
    }
  },
  {
    name: "Trousseau",
    img: "3nJX5Dm.jpeg",
    opts {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  }

];
