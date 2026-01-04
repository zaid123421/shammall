import { TranslationContent } from "@/constants/translations";

export interface ShopSectionItem {
  imgSrc: string;
  alt: string;
  textKey: keyof TranslationContent;
}

export const shopSectionData: ShopSectionItem[] = [
  { imgSrc: "/box.svg", alt: "box", textKey: "wholesale" },
  { imgSrc: "/gift.svg", alt: "gift", textKey: "gifts" },
  { imgSrc: "/gym.svg", alt: "gym", textKey: "sports" },
  { imgSrc: "/clothes.svg", alt: "clothes", textKey: "clothes" },
  { imgSrc: "/car.svg", alt: "car", textKey: "cars" },
  { imgSrc: "/phone.svg", alt: "electronic", textKey: "electronics" },
  { imgSrc: "/make-up.svg", alt: "make_up", textKey: "beauty" },
  { imgSrc: "/building.svg", alt: "construction", textKey: "construction" },
];