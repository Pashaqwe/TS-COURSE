type Pcbrand = {
  name: string;
  country: string;
  createdAd: Date;
};

type WellKnownBrands =
  | "apple"
  | "lenoveo"
  | "hp"
  | "dell"
  | "microsoft"
  | "huawei";

type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: Pcbrand;
};

const brandRecord: MyPcRecord = {
  apple: {
    country: "USE",
    createdAd: new Date(),
    name: "Apple",
  },
};

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.apple?.country);
}

type PartOfWindow = {
  [Key in "document" | "screen" | "navigator"]: Window[Key];
};

const p: PartOfWindow = {
  screen: window.screen,
};

export {};
