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

// lib/data.ts
export type ReviewItem = 
  | { kind: "photo"; images: string[]; avatar: string; }
  | { kind: "text"; name: string; role: string; avatar: string; paragraphs: string[]; };

export const reviews: ReviewItem[] = [
  {
    kind: "photo",
    images: ["/images/reviews-1.png", "/images/event-1.png", "/images/FAQ-banner.png"], // Добавил несколько картинок для слайдера
    avatar: "/images/reviews-person-1.png",
  },
  {
    kind: "text",
    name: "Михаил П.",
    role: "Фрилансер",
    avatar: "/images/reviews-person-2.png",
    paragraphs: [
      "Виды из телескопа были невероятными, а викторины для детей были веселыми и интересными.",
      "Я настоятельно рекомендую планетарий всем, кто хочет почувствовать незабываемое впечатление и познать немного про нашу вселенную!"
    ],
  },
  {
    kind: "photo",
    images: ["/images/reviews-2.png", "/images/main-background.png", "/images/discounts-1.png"],
    avatar: "/images/reviews-person-3.png",
  },
  {
    kind: "text",
    name: "Елена П.",
    role: "Домохозяйка",
    avatar: "/images/reviews-person-4.png",
    paragraphs: [
      "Мы пришли с детьми разного возраста, и все они были в восторге от того, что увидели.",
      "Малыши с удовольствием изучали планеты и звезды, а также задавали вопросы астрономам, которые с радостью отвечали на них."
    ],
  },
];