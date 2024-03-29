angular
.module("countrie.service", [])
.factory('Countrie', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var countries = [{
            name: "Otro",
            dial_code: "+0",
            code: "OT"
        }, {
            name: "United States",
            dial_code: "+1",
            code: "US"
        }, {
            name: "Israel",
            dial_code: "+972",
            code: "IL"
        }, {
            name: "Afghanistan",
            dial_code: "+93",
            code: "AF"
        }, {
            name: "Albania",
            dial_code: "+355",
            code: "AL"
        }, {
            name: "Algeria",
            dial_code: "+213",
            code: "DZ"
        }, {
            name: "Andorra",
            dial_code: "+376",
            code: "AD"
        }, {
            name: "Angola",
            dial_code: "+244",
            code: "AO"
        }, {
            name: "Anguilla",
            dial_code: "+1 264",
            code: "AI"
        }, {
            name: "Argentina",
            dial_code: "+54",
            code: "AR"
        }, {
            name: "Armenia",
            dial_code: "+374",
            code: "AM"
        }, {
            name: "Aruba",
            dial_code: "+297",
            code: "AW"
        }, {
            name: "Australia",
            dial_code: "+61",
            code: "AU"
        }, {
            name: "Austria",
            dial_code: "+43",
            code: "AT"
        }, {
            name: "Azerbaijan",
            dial_code: "+994",
            code: "AZ"
        }, {
            name: "Bahamas",
            dial_code: "+1 242",
            code: "BS"
        }, {
            name: "Belgium",
            dial_code: "+32",
            code: "BE"
        }, {
            name: "Belize",
            dial_code: "+501",
            code: "BZ"
        }, {
            name: "Benin",
            dial_code: "+229",
            code: "BJ"
        }, {
            name: "Bermuda",
            dial_code: "+1 441",
            code: "BM"
        }, {
            name: "Botswana",
            dial_code: "+267",
            code: "BW"
        }, {
            name: "Brazil",
            dial_code: "+55",
            code: "BR"
        }, {
            name: "Bulgaria",
            dial_code: "+359",
            code: "BG"
        }, {
            name: "Burkina Faso",
            dial_code: "+226",
            code: "BF"
        }, {
            name: "Cambodia",
            dial_code: "+855",
            code: "KH"
        },
        {
            name: "Cameroon",
            dial_code: "+237",
            code: "CM"
        }, {
            name: "Canada",
            dial_code: "+1",
            code: "CA"
        }, {
            name: "Cape Verde",
            dial_code: "+238",
            code: "CV"
        }, {
            name: "Cayman Islands",
            dial_code: "+ 345",
            code: "KY"
        }, {
            name: "Central African Republic",
            dial_code: "+236",
            code: "CF"
        }, {
            name: "Chile",
            dial_code: "+56",
            code: "CL"
        }, {
            name: "China",
            dial_code: "+86",
            code: "CN"
        }, , {
            name: "Colombia",
            dial_code: "+57",
            code: "CO"
        }, {
            name: "Congo",
            dial_code: "+242",
            code: "CG"
        }, {
            name: "Costa Rica",
            dial_code: "+506",
            code: "CR"
        }, {
            name: "Croatia",
            dial_code: "+385",
            code: "HR"
        }, {
            name: "Cuba",
            dial_code: "+53",
            code: "CU"
        }, {
            name: "Czech Republic",
            dial_code: "+420",
            code: "CZ"
        }, {
            name: "Denmark",
            dial_code: "+45",
            code: "DK"
        }, {
            name: "Dominica",
            dial_code: "+1 767",
            code: "DM"
        }, {
            name: "Dominican Republic",
            dial_code: "+1 849",
            code: "DO"
        }, {
            name: "Ecuador",
            dial_code: "+593",
            code: "EC"
        }, {
            name: "Egypt",
            dial_code: "+20",
            code: "EG"
        }, {
            name: "El Salvador",
            dial_code: "+503",
            code: "SV"
        }, {
            name: "Equatorial Guinea",
            dial_code: "+240",
            code: "GQ"
        }, {
            name: "Estonia",
            dial_code: "+372",
            code: "EE"
        }, {
            name: "Ethiopia",
            dial_code: "+251",
            code: "ET"
        }, {
            name: "Fiji",
            dial_code: "+679",
            code: "FJ"
        }, {
            name: "Finland",
            dial_code: "+358",
            code: "FI"
        }, {
            name: "France",
            dial_code: "+33",
            code: "FR"
        }, {
            name: "French Guiana",
            dial_code: "+594",
            code: "GF"
        }, {
            name: "Gabon",
            dial_code: "+241",
            code: "GA"
        }, {
            name: "Gambia",
            dial_code: "+220",
            code: "GM"
        }, {
            name: "Georgia",
            dial_code: "+995",
            code: "GE"
        }, {
            name: "Germany",
            dial_code: "+49",
            code: "DE"
        }, {
            name: "Ghana",
            dial_code: "+233",
            code: "GH"
        }, {
            name: "Gibraltar",
            dial_code: "+350",
            code: "GI"
        }, {
            name: "Greece",
            dial_code: "+30",
            code: "GR"
        }, {
            name: "Greenland",
            dial_code: "+299",
            code: "GL"
        }, {
            name: "Grenada",
            dial_code: "+1 473",
            code: "GD"
        }, {
            name: "Guatemala",
            dial_code: "+502",
            code: "GT"
        }, {
            name: "Guinea",
            dial_code: "+224",
            code: "GN"
        }, {
            name: "Guinea-Bissau",
            dial_code: "+245",
            code: "GW"
        }, {
            name: "Guyana",
            dial_code: "+595",
            code: "GY"
        }, {
            name: "Haiti",
            dial_code: "+509",
            code: "HT"
        }, {
            name: "Honduras",
            dial_code: "+504",
            code: "HN"
        }, {
            name: "Hungary",
            dial_code: "+36",
            code: "HU"
        }, {
            name: "Iceland",
            dial_code: "+354",
            code: "IS"
        }, {
            name: "India",
            dial_code: "+91",
            code: "IN"
        }, {
            name: "Indonesia",
            dial_code: "+62",
            code: "ID"
        }, {
            name: "Iraq",
            dial_code: "+964",
            code: "IQ"
        }, {
            name: "Ireland",
            dial_code: "+353",
            code: "IE"
        }, {
            name: "Israel",
            dial_code: "+972",
            code: "IL"
        }, {
            name: "Italy",
            dial_code: "+39",
            code: "IT"
        }, {
            name: "Jamaica",
            dial_code: "+1 876",
            code: "JM"
        }, {
            name: "Japan",
            dial_code: "+81",
            code: "JP"
        }, {
            name: "Jordan",
            dial_code: "+962",
            code: "JO"
        }, {
            name: "Kazakhstan",
            dial_code: "+7 7",
            code: "KZ"
        }, {
            name: "Kenya",
            dial_code: "+254",
            code: "KE"
        }, {
            name: "Kiribati",
            dial_code: "+686",
            code: "KI"
        }, {
            name: "Kuwait",
            dial_code: "+965",
            code: "KW"
        }, {
            name: "Lesotho",
            dial_code: "+266",
            code: "LS"
        }, {
            name: "Liberia",
            dial_code: "+231",
            code: "LR"
        }, {
            name: "Liechtenstein",
            dial_code: "+423",
            code: "LI"
        }, {
            name: "Lithuania",
            dial_code: "+370",
            code: "LT"
        }, {
            name: "Luxembourg",
            dial_code: "+352",
            code: "LU"
        }, {
            name: "Madagascar",
            dial_code: "+261",
            code: "MG"
        }, {
            name: "Malaysia",
            dial_code: "+60",
            code: "MY"
        }, {
            name: "Maldives",
            dial_code: "+960",
            code: "MV"
        }, {
            name: "Mali",
            dial_code: "+223",
            code: "ML"
        }, {
            name: "Malta",
            dial_code: "+356",
            code: "MT"
        }, {
            name: "Martinique",
            dial_code: "+596",
            code: "MQ"
        }, {
            name: "Mauritania",
            dial_code: "+222",
            code: "MR"
        }, {
            name: "Mexico",
            dial_code: "+52",
            code: "MX"
        }, {
            name: "Monaco",
            dial_code: "+377",
            code: "MC"
        }, {
            name: "Mongolia",
            dial_code: "+976",
            code: "MN"
        }, {
            name: "Montenegro",
            dial_code: "+382",
            code: "ME"
        }, {
            name: "Morocco",
            dial_code: "+212",
            code: "MA"
        }, {
            name: "Myanmar",
            dial_code: "+95",
            code: "MM"
        }, {
            name: "Namibia",
            dial_code: "+264",
            code: "NA"
        }, {
            name: "Nauru",
            dial_code: "+674",
            code: "NR"
        }, {
            name: "Nepal",
            dial_code: "+977",
            code: "NP"
        }, {
            name: "Netherlands",
            dial_code: "+31",
            code: "NL"
        }, {
            name: "New Zealand",
            dial_code: "+64",
            code: "NZ"
        }, {
            name: "Nicaragua",
            dial_code: "+505",
            code: "NI"
        }, {
            name: "Nigeria",
            dial_code: "+234",
            code: "NG"
        }, {
            name: "Norway",
            dial_code: "+47",
            code: "NO"
        }, {
            name: "Oman",
            dial_code: "+968",
            code: "OM"
        }, {
            name: "Pakistan",
            dial_code: "+92",
            code: "PK"
        }, {
            name: "Palau",
            dial_code: "+680",
            code: "PW"
        }, {
            name: "Panama",
            dial_code: "+507",
            code: "PA"
        }, {
            name: "Paraguay",
            dial_code: "+595",
            code: "PY"
        }, {
            name: "Peru",
            dial_code: "+51",
            code: "PE"
        }, {
            name: "Philippines",
            dial_code: "+63",
            code: "PH"
        }, {
            name: "Poland",
            dial_code: "+48",
            code: "PL"
        }, {
            name: "Portugal",
            dial_code: "+351",
            code: "PT"
        }, {
            name: "Puerto Rico",
            dial_code: "+1 939",
            code: "PR"
        }, {
            name: "Qatar",
            dial_code: "+974",
            code: "QA"
        }, {
            name: "Romania",
            dial_code: "+40",
            code: "RO"
        }, {
            name: "Samoa",
            dial_code: "+685",
            code: "WS"
        }, {
            name: "San Marino",
            dial_code: "+378",
            code: "SM"
        }, {
            name: "Saudi Arabia",
            dial_code: "+966",
            code: "SA"
        }, {
            name: "Senegal",
            dial_code: "+221",
            code: "SN"
        }, {
            name: "Serbia",
            dial_code: "+381",
            code: "RS"
        }, {
            name: "Singapore",
            dial_code: "+65",
            code: "SG"
        }, {
            name: "Slovenia",
            dial_code: "+386",
            code: "SI"
        }, {
            name: "Solomon Islands",
            dial_code: "+677",
            code: "SB"
        }, {
            name: "South Africa",
            dial_code: "+27",
            code: "ZA"
        }, {
            name: "Spain",
            dial_code: "+34",
            code: "ES"
        }, {
            name: "Sri Lanka",
            dial_code: "+94",
            code: "LK"
        }, {
            name: "Sudan",
            dial_code: "+249",
            code: "SD"
        }, {
            name: "Swaziland",
            dial_code: "+268",
            code: "SZ"
        }, {
            name: "Sweden",
            dial_code: "+46",
            code: "SE"
        }, {
            name: "Tajikistan",
            dial_code: "+992",
            code: "TJ"
        }, {
            name: "Thailand",
            dial_code: "+66",
            code: "TH"
        }, {
            name: "Togo",
            dial_code: "+228",
            code: "TG"
        }, {
            name: "Tonga",
            dial_code: "+676",
            code: "TO"
        }, {
            name: "Trinidad and Tobago",
            dial_code: "+1 868",
            code: "TT"
        }, {
            name: "Tunisia",
            dial_code: "+216",
            code: "TN"
        }, {
            name: "Turkey",
            dial_code: "+90",
            code: "TR"
        }, {
            name: "Uganda",
            dial_code: "+256",
            code: "UG"
        }, {
            name: "Ukraine",
            dial_code: "+380",
            code: "UA"
        }, {
            name: "United Arab Emirates",
            dial_code: "+971",
            code: "AE"
        }, {
            name: "United Kingdom",
            dial_code: "+44",
            code: "GB"
        }, {
            name: "Uruguay",
            dial_code: "+598",
            code: "UY"
        }, {
            name: "Uzbekistan",
            dial_code: "+998",
            code: "UZ"
        }, {
            name: "Yemen",
            dial_code: "+967",
            code: "YE"
        }, {
            name: "Zambia",
            dial_code: "+260",
            code: "ZM"
        }, {
            name: "Zimbabwe",
            dial_code: "+263",
            code: "ZW"
        }, {
            name: "land Islands",
            dial_code: "",
            code: "AX"
        }, {
            name: "Bolivia, Plurinational State of",
            dial_code: "+591",
            code: "BO"
        }, {
            name: "Cocos (Keeling) Islands",
            dial_code: "+61",
            code: "CC"
        }, {
            name: "Congo, The Democratic Republic of the",
            dial_code: "+243",
            code: "CD"
        }, {
            name: "Hong Kong",
            dial_code: "+852",
            code: "HK"
        }, {
            name: "Iran, Islamic Republic of",
            dial_code: "+98",
            code: "IR"
        }, {
            name: "Jersey",
            dial_code: "+44",
            code: "JE"
        }, {
            name: "Korea, Democratic People's Republic of",
            dial_code: "+850",
            code: "KP"
        }, {
            name: "Korea, Republic of",
            dial_code: "+82",
            code: "KR"
        }, {
            name: "Micronesia, Federated States of",
            dial_code: "+691",
            code: "FM"
        }, {
            name: "Palestinian Territory, Occupied",
            dial_code: "+970",
            code: "PS"
        }, {
            name: "Russia",
            dial_code: "+7",
            code: "RU"
        }, {
            name: "Saint Barthélemy",
            dial_code: "+590",
            code: "BL"
        }, {
            name: "Saint Lucia",
            dial_code: "+1 758",
            code: "LC"
        }, {
            name: "Sao Tome and Principe",
            dial_code: "+239",
            code: "ST"
        }, {
            name: "Somalia",
            dial_code: "+252",
            code: "SO"
        }, {
            name: "Syrian Arab Republic",
            dial_code: "+963",
            code: "SY"
        }, {
            name: "Taiwan, Province of China",
            dial_code: "+886",
            code: "TW"
        }, {
            name: "Tanzania, United Republic of",
            dial_code: "+255",
            code: "TZ"
        }, {
            name: "Venezuela, Bolivarian Republic of",
            dial_code: "+58",
            code: "VE"
        }, {
            name: "Viet Nam",
            dial_code: "+84",
            code: "VN"
        }, {
            name: "Virgin Islands, British",
            dial_code: "+1 284",
            code: "VG"
        }, {
            name: "Virgin Islands, U.S.",
            dial_code: "+1 340",
            code: "VI"
        }];

    return {
        all: function () {
            return countries;
        }


    };
});
