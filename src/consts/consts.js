import img1 from "../img/slider-images/ua-flag.png";
import img2 from "../img/slider-images/image2_sml.png";
import img3 from "../img/slider-images/image3_sml.png";
import foodIcon from "../img/icons/food.svg";
import fileIcon from "../img/icons/file.svg";
import money from "../img/icons/money.svg";
import explosion from "../img/icons/explosion.svg";
import file from "../img/icons/file.svg";
import medicalIcon from "../img/icons/medical.svg";
import communitySupportIcon from "../img/icons/community-support.svg";
import peopleSupportIcon from "../img/icons/people-support.svg";
import waterSupplyIcon from "../img/icons/water-supply.svg";
import unitedkingdom from "../img/flags/unitedkingdom.svg";
import canada from "../img/flags/canada.svg";
import netherlands from "../img/flags/netherlands.svg";
import unitedstates from "../img/flags/unitedstates.svg";
import austallia from "../img/flags/austallia.svg";
import belgium from "../img/flags/belgium.svg";
import sweden from "../img/flags/sweden.svg";
import italy from "../img/flags/italy.svg";
import norway from "../img/flags/norway.svg";
import spain from "../img/flags/spain.svg";
import denmark from "../img/flags/denmark.svg";
import japan from "../img/flags/japan.svg";
import ireland from "../img/flags/ireland.svg";
import france from "../img/flags/france.svg";
import switzerland from "../img/flags/switzerland.svg";
import iceland from "../img/flags/iceland.svg";
import lithuania from "../img/flags/lithuania.svg";
import slovenia from "../img/flags/slovenia.svg";
import germany from "../img/flags/germany.svg";
import korea from "../img/flags/korea.svg";
import luxembourg from "../img/flags/luxembourg.svg";
import estonia from "../img/flags/estonia.svg";
import jersey from "../img/flags/jersey.svg";
import cyprus from "../img/flags/cyprus.svg";
import philippines from "../img/flags/philippines.svg";
import newzealand from "../img/flags/newzealand.svg";
import privatedonations from "../img/flags/privatedonations.png";

export const newsList = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies",
    img: img1,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies",
    img: img2,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies",
    img: img3,
  },
];

export const donorsCountriesList = [
  { id: 1, title: "United Kingdom", img: unitedkingdom, count: 43.1 },
  { id: 2, title: "Canada", img: canada, count: 31.3 },
  { id: 3, title: "Netherlands", img: netherlands, count: 22.3 },
  { id: 4, title: "United States", img: unitedstates, count: 20 },
  { id: 5, title: "Germany", img: germany, count: 18.5 },
  { id: 6, title: "Australia", img: austallia, count: 11.1 },
  { id: 7, title: "Belgium", img: belgium, count: 9.9 },
  {
    id: 8,
    title: "Private donations (through UHF)",
    img: privatedonations,
    count: 8,
  },
  { id: 9, title: "Sweden", img: sweden, count: 7.1 },
  { id: 10, title: "Italy", img: italy, count: 6.6 },
  { id: 11, title: "Norway", img: norway, count: 6.1 },
  { id: 12, title: "Spain", img: spain, count: 5.3 },
  { id: 13, title: "Denmark", img: denmark, count: 4.5 },
  { id: 14, title: "Japan", img: japan, count: 4.5 },
  { id: 15, title: "Ireland", img: ireland, count: 3.3 },
  { id: 16, title: "France", img: france, count: 2.1 },
  { id: 17, title: "New Zealand", img: newzealand, count: 1.4 },
  { id: 18, title: "Switzerland", img: switzerland, count: 0.5 },
  { id: 19, title: "Korea", img: korea, count: 0.5 },
  { id: 20, title: "Iceland", img: iceland, count: 0.4 },
  { id: 21, title: "Luxembourg", img: luxembourg, count: 0.4 },
  { id: 22, title: "Lithuania", img: lithuania, count: 0.3 },
  { id: 23, title: "Slovenia", img: slovenia, count: 0.2 },
  { id: 24, title: "Estonia", img: estonia, count: 0.2 },
  { id: 25, title: "Jersey", img: jersey, count: 0.2 },
  { id: 26, title: "Cyprus", img: cyprus, count: 0.1 },
  { id: 27, title: "Philippines", img: philippines, count: 0.1 },
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
    descrip:
      "First 2022 reserve allocation for $3m launched on 30 December 2021",
    month: "Jan",
    amount: 3,
    icon: money,
    classname: "timeline-icon__money-icon",
  },
  {
    id: 2,
    descrip: "Russia invades Ukraine on 24 February",
    month: "Feb",
    icon: explosion,
  },
  {
    id: 3,
    descrip:
      "Emergency Relief Coordinator (ERC) allocates $20m from CERF on 24 February",
    month: "Feb",
    amount: 20,
    icon: money,
    classname: "timeline-icon__money-icon",
  },
  {
    id: 4,
    descrip:
      "UHF launches 2nd Reserve Allocation for $18m on 27 February, later increased to $41m",
    month: "Feb",
    amount: 41,
    icon: money,
    classname: "timeline-icon__money-icon",
  },
  {
    id: 5,
    descrip:
      "Ukraine flash appeal of $1.1b is issued to support 6m people targeted for assistance on 1 March",
    month: "Mar",
    icon: file,
  },
  {
    id: 6,
    descrip:
      "Emergency Relief Coordinator (ERC) allocated $40m from CERF on 14 March",
    month: "Mar",
    amount: 40,
    icon: money,
    classname: "timeline-icon__money-icon",
  },
  {
    id: 7,
    descrip: "UHF launches 3rd Reserve Allocation for $50m on 19 April",
    month: "Apr",
    amount: 50,
    icon: money,
    classname: "timeline-icon__money-icon",
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
    x: 405,
    y: 392,
  },
  { region: "Odesʹka", amount: "1M", circleSize: "sm", x: 341, y: 402 },
  { region: "Khersonsʹka", amount: "1.2M", circleSize: "md", x: 484, y: 413 },
  { region: "Zaporizʹka", amount: "3.6M", circleSize: "md", x: 573, y: 388 },
  { region: "Donetsʹka", amount: "12.7M", circleSize: "lg", x: 657, y: 300 },
  { region: "Luhansʹka", amount: "3.7M", circleSize: "md", x: 718, y: 249 },
  { region: "Kharkivsʹka", amount: "8.1M", circleSize: "lg", x: 606, y: 196 },
  {
    region: "Dnipropetrovsʹka",
    amount: "2.7M",
    circleSize: "md",
    x: 520,
    y: 297,
  },
  {
    region: "Kirovohradsʹka",
    amount: "1.2M",
    circleSize: "md",
    x: 405,
    y: 295,
  },
  {
    region: "Poltavsʹka",
    amount: "4.1M",
    circleSize: "md",
    x: 490,
    y: 217,
  },
  {
    region: "Sumsʹka",
    amount: "3.6M",
    circleSize: "md",
    x: 509,
    y: 118,
  },
  {
    region: "Chernihivsʹka",
    amount: "8.6M",
    circleSize: "lg",
    x: 399,
    y: 88,
  },
  {
    region: "Cherkasʹka",
    amount: "1M",
    circleSize: "md",
    theme: "dark",
    x: 384,
    y: 236,
  },
  {
    region: "Kyyivsʹka",
    amount: "3.4M",
    circleSize: "md",
    x: 344,
    y: 185,
  },
  {
    region: "Vinnytsʹka",
    amount: "3.6M",
    circleSize: "md",
    x: 265,
    y: 279,
  },
  {
    region: "Khmelʹnytsʹka",
    amount: "6.3M",
    circleSize: "md",
    theme: "dark",
    x: 184,
    y: 234,
  },
  {
    region: "Zhytomyrsʹka",
    amount: "1M",
    circleSize: "md",
    theme: "dark",
    x: 244,
    y: 150,
  },
  {
    region: "Rivnensʹka",
    amount: "0.8M",
    circleSize: "sm",
    theme: "dark",
    x: 170,
    y: 153,
  },
  {
    region: "Volynsʹka",
    amount: "0.9M",
    circleSize: "sm",
    theme: "dark",
    x: 97,
    y: 133,
  },
  {
    region: "Lʹvivsʹka",
    amount: "7.4M",
    circleSize: "lg",
    x: 33,
    y: 189,
  },
  {
    region: "Zakarpatsʹka",
    amount: "3.9M",
    circleSize: "md",
    x: 15,
    y: 293,
  },
  {
    region: "Ternopilʹsʹka",
    amount: "6.8M",
    circleSize: "md",
    x: 121,
    y: 203,
  },
  {
    region: "Ivano-Frankivsʹka",
    amount: "2.4M",
    circleSize: "md",
    x: 83,
    y: 271,
  },

  {
    region: "Chernivetsʹka",
    amount: "2.5M",
    circleSize: "md",
    theme: "dark",
    x: 146,
    y: 303,
  },
  {
    region: "Avtonomna Respublika Krym",
    theme: "dark",
    x: 494,
    y: 526,
  },
];
