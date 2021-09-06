console.log("heys")
const USERS = {
  "0x0000000000000000000000000000000000000000": {
    hash: "0x0000000000000000000000000000000000000000",
    id: "1",
    name: "zero",
    role: "",
    country: "",
    street: "",
    city: "",
    province: "",
    zip_code: ""
  },
  "0x5343a4540dea4e4ca75d089e8a4fc472163596a8": {
    hash: "0x5343a4540dea4e4ca75d089e8a4fc472163596a8",
    id: "2",
    name: "sold",
    role: "",
    country: "",
    street: "",
    city: "",
    province: "",
    zip_code: ""
  },
  "0x2faa5d599e9ac5d1a5092a6e1b1c7fc7dcbdac45": {
    hash: "0x2faa5d599e9ac5d1a5092a6e1b1c7fc7dcbdac45",
    id: "3",
    name: "Jack (dev)",
    role: "administrator",
    country: "France",
    street: "78 rue Victor Hugo",
    city: "CORBEIL-ESSONNES",
    province: "Île-de-France",
    zip_code: "91100"
  },
  "0xaa7008c660b0b36576adba8df972ca071c731ea3": {
    hash: "0xaa7008c660b0b36576adba8df972ca071c731ea3",
    id: "4",
    name: "Florent X.",
    role: "producer",
    country: "France",
    street: "67 Chemin Des Bateliers",
    city: "ANGERS",
    province: "Pays de la Loire",
    zip_code: "4367"
  },
  "0x429dcf7b3b61036a8f9f1c58e6664a32d2167e43": {
    hash: "0x429dcf7b3b61036a8f9f1c58e6664a32d2167e43",
    id: "5",
    name: "Ricardo M.",
    role: "warehouse",
    country: "Spain",
    street: "22 Carrer de la Verneda",
    city: "Martorelles",
    province: "Barcelona",
    zip_code: "08107"
  },
  "0xd5de4cf988a87cd29c74b153b48ff9a3ed9cb6cd": {
    hash: "0xd5de4cf988a87cd29c74b153b48ff9a3ed9cb6cd",
    id: "6",
    name: "Giannis P.",
    role: "vendor",
    country: "Greece",
    street: "13 Kissamou",
    city: "Agia Triada",
    province: "Iraklio",
    zip_code: "71202"
  },
  "0x9e92313f53b84d64e1903aefd4dd73088a7e781c": {
    hash: "0x9e92313f53b84d64e1903aefd4dd73088a7e781c",
    id: "7",
    name: "Elevage Verte",
    role: "producer",
    country: "France",
    street: "88 rue Lenotre",
    city: "RENNES",
    province: "Bretagne",
    zip_code: "35200"
  },
  "0xf5c846a26aca6fdbb6e3beb5b9a69d1162a303f5": {
    hash: "0xf5c846a26aca6fdbb6e3beb5b9a69d1162a303f5",
    id: "8",
    name: "Adette M.",
    role: "warehouse",
    country: "Germany",
    street: "Marseiller Strasse 76",
    city: "Spatzenhausen",
    province: "Freistaat Bayern",
    zip_code: "82447"
  },
  "0x64e1d13f9e68cd76cff84f43b105907ef7150317": {
    hash: "0x64e1d13f9e68cd76cff84f43b105907ef7150317",
    id: "9",
    name: "Vertikos L.",
    role: "vendor",
    country: "Greece",
    street: "Prasinou Lofou 98",
    city: "Attiki",
    province: "Iraklio",
    zip_code: "14121"
  }
}

myFilter = function (obj, predicate) {
  let result = {},
    key

  for (key in obj) {
    // console.log({ key })
    // console.log("object:", obj[key])

    if (obj.hasOwnProperty(key) && predicate(obj[key])) {
      result[key] = obj[key]
    }
  }

  console.log(result)
  return result
}

userFilter = function (obj, predicate) {
  let result = [],
    key

  for (key in obj) {
    // console.log({ key })
    // console.log("object:", obj[key])

    if (obj.hasOwnProperty(key) && predicate(obj[key])) {
      console.log("key", key)

      console.log("object", obj[key])
      result.push(obj[key])
    }
  }

  console.log(result)
  return result
}

userFilter(USERS, item => item["role"] == "producer")
// filter(USERS, item => item["role"] == "vendor")
