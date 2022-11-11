import img1 from "../img/slider-images/img1.jpg";
import img3 from "../img/slider-images/img3.jpg";
import img4 from "../img/slider-images/img4.jpg";
import foodIcon from "../img/icons/food.svg";
import fileIcon from "../img/icons/file.svg";
import medicalIcon from "../img/icons/medical.svg";
import communitySupportIcon from "../img/icons/community-support.svg";
import peopleSupportIcon from "../img/icons/people-support.svg";
import waterSupplyIcon from "../img/icons/water-supply.svg";

export const newsList = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies",
    img: img1,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies",
    img: img3,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies",
    img: img4,
  },
];

export const donorsCountriesList = [
  { id: 1, title: "United Kingdom", img: "", count: 43.1 },
  { id: 2, title: "Canada", img: "", count: 31.3 },
  { id: 3, title: "Netherlands", img: "", count: 22.3 },
  { id: 4, title: "United States", img: "", count: 20 },
  { id: 5, title: "Germany", img: "", count: 18.5 },
  { id: 6, title: "Australia", img: "", count: 11.1 },
  { id: 7, title: "Belgium", img: "", count: 9.9 },
  { id: 8, title: "Private donations (through UHF)", img: "", count: 8 },
  { id: 9, title: "Sweden", img: "", count: 7.1 },
  { id: 10, title: "Italy", img: "", count: 6.6 },
  { id: 11, title: "Norway", img: "", count: 6.1 },
  { id: 12, title: "Spain", img: "", count: 5.3 },
  { id: 13, title: "Denmark", img: "", count: 4.5 },
  { id: 14, title: "Japan", img: "", count: 4.5 },
  { id: 15, title: "Ireland", img: "", count: 3.3 },
  { id: 16, title: "France", img: "", count: 2.1 },
  { id: 17, title: "New Zealand", img: "", count: 1.4 },
  { id: 18, title: "Switzerland", img: "", count: 0.5 },
  { id: 19, title: "Korea", img: "", count: 0.5 },
  { id: 20, title: "Iceland", img: "", count: 0.4 },
  { id: 21, title: "Luxembourg", img: "", count: 0.4 },
  { id: 22, title: "Lithuania", img: "", count: 0.3 },
  { id: 23, title: "Slovenia", img: "", count: 0.2 },
];

export const clusterAllocationsList = [
  { id: 1, title: "MPC", count: "25.0" },
  { id: 2, title: "Food Security", count: 17.1 },
  { id: 3, title: "Health", count: 14.9 },
  { id: 4, title: "WASH", count: 12.1 },
  { id: 5, title: "Shelter/NFIs", count: 9.0 },
  { id: 6, title: "Protection", count: 8.2 },
  { id: 7, title: "Education", count: 1.2 },
  { id: 8, title: "Logistics", count: 1.0 },
  { id: 9, title: "CCCM", count: 0.9 },
  { id: 10, title: "CSS", count: 0.8 },
  { id: 11, title: "ETC", count: 0.5 },
  { id: 12, title: "Nutrition", count: 0.3 },
];

export const timelineList = [
  {
    id: 1,
    descrip: "First reserve allocation for $3m launched on 30 December 2021",
    month: "Jan",
    amount: 3,
  },
  {
    id: 2,
    descrip: "Russia invades Ukraine on 24 February",
    month: "Feb",
  },
  {
    id: 3,
    descrip:
      "Emergency Relief Coordinator (ERC) allocates $20m from CERF on 24 February",
    month: "Feb",
    amount: 20,
  },
  {
    id: 4,
    descrip:
      "UHF launches 2nd Reserve Allocation for $18m on 27 February, later increased to $41m",
    month: "Feb",
    amount: 41,
  },
  {
    id: 5,
    descrip:
      "Ukraine flash appeal of $1.1b is issued to support 6m people targeted for assistance on 1 March",
    month: "Mar",
  },
  {
    id: 6,
    descrip:
      "Emergency Relief Coordinator (ERC) allocated $40m from CEFR on 14 March",
    month: "Mar",
    amount: 40,
  },
  {
    id: 7,
    descrip: "UHF launches 3rd Reserve Allocation for $50m on 19 April",
    month: "Apr",
    amount: 50,
  },
];

export const expectedAchievementsList = [
  {
    id: 1,
    img: foodIcon,
    amount: 3.5,
    text: "individuals will receive in-kind food, agricultural and cash assistance.",
  },
  {
    id: 2,
    img: fileIcon,
    amount: 5,
    text: "people will benefit from the provision of educational equipment and development of lifeskills.",
  },
  {
    id: 3,
    img: medicalIcon,
    amount: 70,
    text: "civilians will benefit via supported community-based medical services and COVID-19 tests conducted.",
  },
  {
    id: 4,
    img: communitySupportIcon,
    amount: 15,
    text: "people from various vulnerable categories will be supported throuht peaceful coexistence and social cohesion projects as well as community-based protection and mine risk education sessions.",
  },
  {
    id: 5,
    img: peopleSupportIcon,
    amount: 41.5,
    text: "people will benefit from winterization programmes support (non-food items, shelter repairs, water supply).",
  },
  {
    id: 6,
    img: waterSupplyIcon,
    amount: 32,
    text: "people will benefit from water supply and sanitation conditions.",
  },
];

export const regionsColors = {
  sevastopol: "#e8e8e8",
  crimea: "#e8e8e8",
  volyn: "#d7e7f7",
  rivne: "#d7e7f7",
  zhytomyr: "#d7e7f7",
  khmelnytskyy: "#d7e7f7",
  cherkasy: "#d7e7f7",
  mykolayiv: "#d7e7f7",
  ternopil: "#1e66b5",
  chernihiv: "#1e66b5",
  kharkiv: "#1e66b5",
  donetsk: "#1e66b5",
  sumy: "#468bce",
  kiev: "#468bce",
  kievCity: "#468bce",
  dnipropetrovsk: "#468bce",
  zaporizhzhya: "#468bce",
  kherson: "#468bce",
  luhansk: "#468bce",
  ivanoFrankivsk: "#87b3df",
  kirovohrad: "#87b3df",
  odessa: "#87b3df",
  poltava: "#87b3df",
  vinnytsya: "#87b3df",
  lviv: "#87b3df",
  zakarpattya: "#87b3df",
  chernivtsi: "#87b3df",
};

export const mapItemsList = [
  {
    region: "Mykolayivsʹka",
    amount: "0.6M",
    circleSize: "sm",
    theme: "dark",
    x: 509,
    y: 407,
  },
  { region: "Odesʹka", amount: "1M", circleSize: "sm", x: 421, y: 413 },
  { region: "Khersonsʹka", amount: "1.2M", circleSize: "md", x: 601, y: 440 },
  { region: "Zaporizʹka", amount: "3.6M", circleSize: "md", x: 720, y: 403 },
  { region: "Donetsʹka", amount: "12.7M", circleSize: "lg", x: 825, y: 324 },
  { region: "Luhansʹka", amount: "3.7M", circleSize: "md", x: 902, y: 248 },
  { region: "Kharkivsʹka", amount: "8.1M", circleSize: "lg", x: 759, y: 200 },
  {
    region: "Dnipropetrovsʹka",
    amount: "2.7M",
    circleSize: "md",
    x: 653,
    y: 298,
  },
  {
    region: "Kirovohradsʹka",
    amount: "1.2M",
    circleSize: "md",
    x: 511,
    y: 301,
  },
  {
    region: "Poltavsʹka",
    amount: "4.1M",
    circleSize: "md",
    x: 617,
    y: 201,
  },
  {
    region: "Sumsʹka",
    amount: "3.6M",
    circleSize: "md",
    x: 637,
    y: 86,
  },
  {
    region: "Chernihivsʹka",
    amount: "8.6M",
    circleSize: "lg",
    x: 497,
    y: 44,
  },
  {
    region: "Cherkasʹka",
    amount: "1M",
    circleSize: "md",
    theme: "dark",
    x: 489,
    y: 226,
  },
  {
    region: "Kyyivsʹka",
    amount: "3.4M",
    circleSize: "md",
    x: 432,
    y: 170,
  },
  {
    region: "Vinnytsʹka",
    amount: "3.6M",
    circleSize: "md",
    x: 332,
    y: 266,
  },
  {
    region: "Khmelʹnytsʹka",
    amount: "6.3M",
    circleSize: "md",
    theme: "dark",
    x: 229,
    y: 222,
  },
  {
    region: "Zhytomyrsʹka",
    amount: "1M",
    circleSize: "md",
    theme: "dark",
    x: 306,
    y: 120,
  },
  {
    region: "Rivnensʹka",
    amount: "0.8M",
    circleSize: "sm",
    theme: "dark",
    x: 206,
    y: 122,
  },
  {
    region: "Volynsʹka",
    amount: "0.9M",
    circleSize: "sm",
    theme: "dark",
    x: 126,
    y: 91,
  },
  {
    region: "Lʹvivsʹka",
    amount: "7.4M",
    circleSize: "lg",
    x: 49,
    y: 188,
  },
  {
    region: "Zakarpatsʹka",
    amount: "3.9M",
    circleSize: "md",
    x: 24,
    y: 300,
  },
  {
    region: "Ternopilʹsʹka",
    amount: "6.8M",
    circleSize: "md",
    x: 151,
    y: 212,
  },
  {
    region: "Ivano-Frankivsʹka",
    amount: "2.4M",
    circleSize: "md",
    x: 99,
    y: 271,
  },

  {
    region: "Chernivetsʹka",
    amount: "2.5M",
    circleSize: "md",
    theme: "dark",
    x: 172,
    y: 321,
  },
];
