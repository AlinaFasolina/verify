export const getCircleSize = (amount) => {
  if (amount <= 10) {
    return "sm";
  } else if (amount > 10 && amount <= 30) {
    return "md";
  } else if (amount > 30 && amount <= 45) {
    return "lg";
  } else if (amount > 45) {
    return "xl";
  }
};

export const getMapCircleSize = (amount) => {
  if (amount <= 1) {
    return "sm";
  } else if (amount > 1 && amount <= 7) {
    return "md";
  } else if (amount > 7) {
    return "lg";
  }
};

export const getRegionName = (region) => {
  if (region === "mykolayivska") {
    return "Mykolayivsʹka";
  } else if (region === "odeska") {
    return "Odesʹka";
  } else if (region === "khersonska") {
    return "Khersonsʹka";
  } else if (region === "zaporizka") {
    return "Zaporizʹka";
  } else if (region === "donetska") {
    return "Donetsʹka";
  } else if (region === "luhanska") {
    return "Luhansʹka";
  } else if (region === "kharkivska") {
    return "Kharkivsʹka";
  } else if (region === "dnipropetrovska") {
    return "Dnipropetrovsʹka";
  } else if (region === "kirovohradska") {
    return "Kirovohradsʹka";
  } else if (region === "poltavska") {
    return "Poltavsʹka";
  } else if (region === "sumska") {
    return "Sumsʹka";
  } else if (region === "chernihivska") {
    return "Chernihivsʹka";
  } else if (region === "cherkaska") {
    return "Cherkasʹka";
  } else if (region === "kyyivska") {
    return "Kyyivsʹka";
  } else if (region === "vinnytska") {
    return "Vinnytsʹka";
  } else if (region === "khmelnytska") {
    return "Khmelʹnytsʹka";
  } else if (region === "zhytomyrska") {
    return "Zhytomyrsʹka";
  } else if (region === "rivnenska") {
    return "Rivnensʹka";
  } else if (region === "volynska") {
    return "Volynsʹka";
  } else if (region === "lvivska") {
    return "Lʹvivsʹka";
  } else if (region === "zakarpatska") {
    return "Zakarpatsʹka";
  } else if (region === "ternopilska") {
    return "Ternopilʹsʹka";
  } else if (region === "ivanofrankivska") {
    return "Ivano-Frankivsʹka";
  } else if (region === "chernivetska") {
    return "Chernivetsʹka";
  } else if (region === "krym") {
    return "Avtonomna Respublika Krym";
  } else {
    return "";
  }
};
