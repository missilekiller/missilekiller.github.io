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
      { name: "Ophelia", key: "oph" },
      { name: "Cyrus", key: "cyr" },
      { name: "Tressa", key: "tre" },
      { name: "Olberic", key: "olb" },
      { name: "Primrose", key: "pri" },
      { name: "Alfyn", key: "alf" },
      { name: "Therion", key: "the" },
      { name: "H'aanit", key: "haa" },
      { name: "Ochette", key: "och" },
      { name: "Castti", key: "cas" },
      { name: "Throne", key: "thr" },
      { name: "Osvald", key: "osv" },
      { name: "Partitio", key: "par" },
      { name: "Agnea", key: "agn" },
      { name: "Temenos", key: "tem" },
      { name: "Hikari", key: "hik" },
      { name: "Side Stories", key: "ss" },
    ]
  },
  {
    name: "Filter Travelers",
    key: "trav",
    tooltip: 'Check this if you want to remove Travelers from being listed.',
    checked: false,
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
      trav: true,
      story: ["och"],
    }
  },
  {
    name: "Castti",
    img: "UD7t3qQ.jpeg",
    opts: {
      series: ["ii"],
      trav: true,
      story: ["cas"],
    }
  },
  {
    name: "Throne",
    img: "rqKt2Ng.jpeg",
    opts: {
      series: ["ii"],
      trav: true,
      story: ["thr"],
    }
  },
  {
    name: "Osvald",
    img: "A0539m9.jpeg",
    opts: {
      series: ["ii"],
      trav: true,
      story: ["osv"],
    }
  },
  {
    name: "Partitio",
    img: "4qRz8Vj.jpeg",
    opts: {
      series: ["ii"],
      trav: true,
      story: ["par"],
    }
  },
  {
    name: "Agnea",
    img: "1QxCF5L.jpeg",
    opts: {
      series: ["ii"],
      trav: true,
      story: ["agn"],
    }
  },
  {
    name: "Temenos",
    img: "N0Yom2L.jpeg",
    opts: {
      series: ["ii"],
      trav: true,
      story: ["tem"],
    }
  },
  {
    name: "Hikari",
    img: "dq4gaEe.jpeg",
    opts: {
      series: ["ii"],
      trav: true,
      story: ["hik"],
    }
  },
  {
    name: "Acta",
    img: "ASLK72X.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Akala",
    img: "UPQ0tWp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Alpione",
    img: "saO7iaX.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Cohazeh",
    img: "rtNiE0i.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Glacis",
    img: "jjp9EOp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Heig",
    img: "E2ubszE.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Juvah",
    img: "7vvG6dY.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Mahina",
    img: "kfFtnM6.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Pom",
    img: "1Ua2nTk.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
    }
  },
  {
    name: "Tera",
    img: "IPO1pjY.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och"],
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
    name: "Mikk and Makk (OT2)",
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
    name: "Temm",
    img: "dztjg1l.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cas"],
    }
  },
  {
    name: "Trousseau",
    img: "3nJX5Dm.jpeg",
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
    name: "Bale (OT2)",
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
      story: ["par", "cas"],
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
      story: ["agn", "tem"],
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
      story: ["och", "tem"],
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
    name: "King Alfred",
    img: "rEV2Gax.jpeg",
    opts: {
      series: ["ii", "i"],
      npc: true,
      story: ["ss", "olb"],
    }
  },  {
    name: "Alpates",
    img: "HRrMjro.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["thr", "tem"],
    }
  },
  {
    name: "Arkar",
    img: "r6w1eAC.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Petrichor",
    img: "PeQpKRp.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och", "tem"],
    }
  },
  {
    name: "Porta",
    img: "DBaBi0q.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Regulus",
    img: "wM6Z4fF.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
    }
  },
  {
    name: "Wooly-Ooly",
    img: "3xFqvxI.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["och", "cas"],
    }
  },
  {
    name: "Yomi",
    img: "pwHNAfA.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["agn", "hik"],
    }
  },
  {
    name: "Olberic",
    img: "XNdLA5m.jpeg",
    opts: {
      series: ["i"],
      trav: true,
      story: ["olb"],
    }
  },
  {
    name: "Cyrus",
    img: "A8nEyaN.jpeg",
    opts: {
      series: ["i"],
      trav: true,
      story: ["cyr"],
    }
  },
  {
    name: "Tressa",
    img: "nnrMRZ9.jpeg",
    opts: {
      series: ["i"],
      trav: true,
      story: ["tre"],
    }
  },
  {
    name: "Ophelia",
    img: "gOr2Tdt.jpeg",
    opts: {
      series: ["i"],
      trav: true,
      story: ["oph"],
    }
  },
  {
    name: "Primrose",
    img: "BVpJXDx.jpeg",
    opts: {
      series: ["i"],
      trav: true,
      story: ["pri"],
    }
  },
  {
    name: "Alfyn",
    img: "Q8LKnXY.jpeg",
    opts: {
      series: ["ii"],
      trav: true,
      story: ["alf"],
    }
  },
  {
    name: "Therion",
    img: "9gcwnyN.jpeg",
    opts: {
      series: ["i"],
      trav: true,
      story: ["the"],
    }
  },
  {
    name: "H'annit",
    img: "HVmDeUS.jpeg",
    opts: {
      series: ["i"],
      trav: true,
      story: ["haa"],
    }
  },
  {
    name: "Bishop Bartolo",
    img: "hQXPGsp.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Daniel",
    img: "czSmKRG.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Derryl",
    img: "XtQT5X6.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Emil",
    img: "SVI59Cy.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Guardian of the First Flame",
    img: "ptHT68w.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Hróðvitnir",
    img: "NGsd5kE.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Archbishop Josef",
    img: "EJKhH8W.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Pontiff Julius",
    img: "wHGQfX8.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Bishop Donovan",
    img: "DOVK8Dz.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Lianna",
    img: "MjhERhg.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Lysa",
    img: "QSZDElt.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Mattias",
    img: "2NpRWjM.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Nate",
    img: "kAyF5WL.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["oph"],
    }
  },
  {
    name: "Dominic",
    img: "JgIqEtd.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Lucia",
    img: "VQePSQa.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Princess Mary",
    img: "NiHNSVl.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Mercedes",
    img: "EwkRrgs.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Odette",
    img: "AoPyRPr.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Russel",
    img: "LoScKnv.jpeg",
    opts: {
      series: ["ii"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Therese",
    img: "JNCOHBP.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Yvon",
    img: "kK4sL4M.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Gideon",
    img: "7RifWqY.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["cyr"],
    }
  },
  {
    name: "Ali",
    img: "DFFHeOh.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Astor",
    img: "8TuDHou.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Baltazar",
    img: "1svhe5y.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Esmerelda",
    img: "vPXia4G.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Ing the Diarist",
    img: "B3ialYb.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Leon",
    img: "ulqEzNE.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Makk",
    img: "PJF9gYG.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Man",
    img: "EoT9MPJ.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Marina",
    img: "HLh3oQY.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Mikk",
    img: "mwv12fG.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Morlock",
    img: "ymJQfZh.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Noa",
    img: "SGylgKe.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Olneo",
    img: "wXuvAWB.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Omar",
    img: "rdE61Wm.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Venomtooth Tiger",
    img: "qwTdQXS.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["tre"],
    }
  },
  {
    name: "Archibold",
    img: "5z4GY8S.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Bale",
    img: "GXTaMLi.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Bernhard",
    img: "dgO1H2t.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Cecily",
    img: "EjITQ1e.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Conrad",
    img: "V14aP5g.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Erhardt",
    img: "unbCBPh.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Gaston",
    img: "5qbt8o6.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Grieg",
    img: "fMebEhv.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Gustav",
    img: "LycB2lM.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Harald",
    img: "Nqka1WJ.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Ned",
    img: "dQrQQ53.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Philip",
    img: "V0t4M3e.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "The Man with the Red Hat",
    img: "1Zxbsec.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Reggie",
    img: "YysaU14.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Victorino",
    img: "cLHSd96.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Wallace",
    img: "leu3lkb.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Werner",
    img: "ybEOZqa.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Joshua",
    img: "AbF53jE.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["olb"],
    }
  },
  {
    name: "Albus",
    img: "WFrl7Cf.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Anna",
    img: "ZUkOlR4.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Arianna",
    img: "OcQuwoE.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Dahlia",
    img: "PxSrnNk.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Eschard",
    img: "nerGckY.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Geoffrey",
    img: "qXVJEt0.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Helena",
    img: "pQzu4cC.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Helgenish",
    img: "OuBzey8.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Jan",
    img: "j4DDGHP.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Oren",
    img: "oji14zE.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Revello",
    img: "FmrIiCa.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Rufus",
    img: "NHubgib.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Simeon",
    img: "UadRayZ.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Yusufa",
    img: "T9A31nR.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["pri"],
    }
  },
  {
    name: "Blotted Viper",
    img: "SpJf1Bl.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Ellen",
    img: "8wjbSBQ.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Flynn",
    img: "bUXxfrM.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Graham Crossford",
    img: "4kbHMyq.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf", "tre", "haa"],
    }
  },
  {
    name: "Nina",
    img: "Bk7mrqm.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Marlene",
    img: "GsqpPgK.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Miguel",
    img: "GSXW6W0.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Ogen",
    img: "XVyUHqp.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Ogre Eagle",
    img: "bShcYQa.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Timothy",
    img: "mjYHRUK.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Vanessa",
    img: "atwLpJK.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Zeph",
    img: "h2XeSS3.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["alf"],
    }
  },
  {
    name: "Barham",
    img: "BrPEqWp.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["the"],
    }
  },
  {
    name: "Cordelia",
    img: "J1H3bgJ.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["the"],
    }
  },
  {
    name: "Darius",
    img: "zO4Szxv.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["the"],
    }
  },
  {
    name: "Gareth",
    img: "XNMooqQ.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["the"],
    }
  },
  {
    name: "Heathcote",
    img: "z5P0MIx.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["the"],
    }
  },
  {
    name: "Orlick",
    img: "wPaoJhW.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["the"],
    }
  },
  {
    name: "Ashlan",
    img: "MIkjfeW.jpeg",
    opts: {
      series: ["i", "cotc"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Alaic",
    img: "kgiQC8z.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Dragon",
    img: "iwU7J35.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Eliza",
    img: "yZTsjsY.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Ghisarma",
    img: "n4lJLN1.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Hagen",
    img: "lBuSVCk.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Khalim",
    img: "ZSowwMt.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "General Lenaar",
    img: "DysPedL.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Linde",
    img: "e7rNEoU.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Lord of the Forest",
    img: "dwhOxEg.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Natalia",
    img: "hn497OV.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Nathan",
    img: "sgbpj72.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Captain Raaf",
    img: "sOipufm.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Susanna",
    img: "0AcpCNC.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Z'aanta",
    img: "MMKceL0.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["haa"],
    }
  },
  {
    name: "Gloria",
    img: "1KOp54A.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Impresario",
    img: "j6UwCEs.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Kaia",
    img: "fO2qIzW.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Kit Crossford",
    img: "pyBK3yG.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Lyblac",
    img: "ZQF0Hxk.jpeg",
    opts: {
      series: ["i", "cotc"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Maruf",
    img: "RSZgyjX.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Meryl",
    img: "CQ26Nm4.jpeg",
    opts: {
      series: ["i"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Miles",
    img: "fKWR3AB.jpeg",
    opts: {
      series: ["i", "cotc"],
      npc: true,
      story: ["ss"],
    }
  },
  {
    name: "Noel",
    img: "1HhqjMO.jpeg",
    opts: {
      series: ["i", "cotc"],
      npc: true,
      story: ["ss"],
    }
  },

];
