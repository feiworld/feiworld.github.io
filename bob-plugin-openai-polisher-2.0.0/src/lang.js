var supportLanguages = [
  ["auto", "auto"],
  ["zh-Hans", "zh-CN"],
  ["zh-Hant", "zh-TW"],
  ["en", "en"],
  ["yue", "粤语"],
  ["wyw", "古文"],
  ["en", "en"],
  ["ja", "ja"],
  ["ko", "ko"],
  ["fr", "fr"],
  ["de", "de"],
  ["es", "es"],
  ["it", "it"],
  ["ru", "ru"],
  ["pt", "pt"],
  ["nl", "nl"],
  ["pl", "pl"],
  ["ar", "ar"],
  ["af", "af"],
  ["am", "am"],
  ["az", "az"],
  ["be", "be"],
  ["bg", "bg"],
  ["bn", "bn"],
  ["bs", "bs"],
  ["ca", "ca"],
  ["ceb", "ceb"],
  ["co", "co"],
  ["cs", "cs"],
  ["cy", "cy"],
  ["da", "da"],
  ["el", "el"],
  ["eo", "eo"],
  ["et", "et"],
  ["eu", "eu"],
  ["fa", "fa"],
  ["fi", "fi"],
  ["fj", "fj"],
  ["fy", "fy"],
  ["ga", "ga"],
  ["gd", "gd"],
  ["gl", "gl"],
  ["gu", "gu"],
  ["ha", "ha"],
  ["haw", "haw"],
  ["he", "he"],
  ["hi", "hi"],
  ["hmn", "hmn"],
  ["hr", "hr"],
  ["ht", "ht"],
  ["hu", "hu"],
  ["hy", "hy"],
  ["id", "id"],
  ["ig", "ig"],
  ["is", "is"],
  ["jw", "jw"],
  ["ka", "ka"],
  ["kk", "kk"],
  ["km", "km"],
  ["kn", "kn"],
  ["ku", "ku"],
  ["ky", "ky"],
  ["la", "lo"],
  ["lb", "lb"],
  ["lo", "lo"],
  ["lt", "lt"],
  ["lv", "lv"],
  ["mg", "mg"],
  ["mi", "mi"],
  ["mk", "mk"],
  ["ml", "ml"],
  ["mn", "mn"],
  ["mr", "mr"],
  ["ms", "ms"],
  ["mt", "mt"],
  ["my", "my"],
  ["ne", "ne"],
  ["no", "no"],
  ["ny", "ny"],
  ["or", "or"],
  ["pa", "pa"],
  ["ps", "ps"],
  ["ro", "ro"],
  ["rw", "rw"],
  ["si", "si"],
  ["sk", "sk"],
  ["sl", "sl"],
  ["sm", "sm"],
  ["sn", "sn"],
  ["so", "so"],
  ["sq", "sq"],
  ["sr", "sr"],
  ["sr-Cyrl", "sr"],
  ["sr-Latn", "sr"],
  ["st", "st"],
  ["su", "su"],
  ["sv", "sv"],
  ["sw", "sw"],
  ["ta", "ta"],
  ["te", "te"],
  ["tg", "tg"],
  ["th", "th"],
  ["tk", "tk"],
  ["tl", "tl"],
  ["tr", "tr"],
  ["tt", "tt"],
  ["ug", "ug"],
  ["uk", "uk"],
  ["ur", "ur"],
  ["uz", "uz"],
  ["vi", "vi"],
  ["xh", "xh"],
  ["yi", "yi"],
  ["yo", "yo"],
  ["zu", "zu"],
];

exports.supportLanguages = supportLanguages;
exports.langMap = new Map(supportLanguages);
exports.langMapReverse = new Map(
  supportLanguages.map(([standardLang, lang]) => [lang, standardLang])
);
