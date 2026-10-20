// lib/data.ts
export type EventItem = {
  slug: string;
  img: string;
  age: string;
  type: string;
  title: string;
  description: string;
  priceAdult: string;
  priceChild: string;
  gallery: string[]; // добавим для интерактива на странице деталей
};

export const events: EventItem[] = [
  {
    slug: "space-walk",
    img: "/images/event-1.png",
    age: "7+",
    type: "полнокупольная программа",
    title: "ПРОГУЛКА ПО ЗВЕЗДНОМУ НЕБУ",
    description:
      "Мы предлагаем вам прогуляться по самым ярким созвездиям северного полушария, насладиться петербургским звездным небом всех сезонов, полюбоваться Млечным Путем и, конечно, загадать заветное желание на «падающую» звезду",
    priceAdult: "400",
    priceChild: "600",
    gallery: ["/images/event-1.png", "/images/event-2.png", "/images/event-3.png"],
  },
  {
    slug: "solar-system",
    img: "/images/event-2.png",
    age: "4+",
    type: "детская интерактивная программа",
    title: "ПУТЕШЕСТВИЕ ПО СОЛНЕЧНОЙ СИСТЕМЕ",
    description:
      "Программа для самых юных посетителей, где можно весело и увлекательно совершить экспедицию на космическом корабле к удивительным планетам. Узнаем какая из планет самая большая, а какая ближе всего находится к Солнцу.",
    priceAdult: "400",
    priceChild: "600",
    gallery: ["/images/event-2.png", "/images/event-1.png", "/images/event-3.png"],
  },
  {
    slug: "dark-astronomy",
    img: "/images/event-3.png",
    age: "10+",
    type: "полнокупольная программа",
    title: "ТЕМНАЯ АСТРОНОМИЯ",
    description:
      "До появления науки как таковой, мы обращались к мифам. На программе «Мифы и легенды звёздного неба» мы узнаем, как люди древности использовали мифологическое мышление в попытках понять, каково место человека во Вселенной...",
    priceAdult: "400",
    priceChild: "600",
    gallery: ["/images/event-3.png", "/images/event-1.png", "/images/event-2.png"],
  },
];