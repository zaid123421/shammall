export interface ShopSectionItem {
  imgSrc: string;
  alt: string;
  text: string;
}

export const shopSectionData: ShopSectionItem[] = [
  { imgSrc: "/box.svg", alt: "box", text: "الجملة", },
  {imgSrc: "/gift.svg",alt: "gift",text: "الهدايا", },
  { imgSrc: "/gym.svg", alt: "gym", text: "الرياضة", },
  { imgSrc: "/clothes.svg", alt: "clothes", text: "ملابس", },
  { imgSrc: "/car.svg", alt: "car", text: "السيارات", },
  { imgSrc: "/phone.svg", alt: "electronic", text: "الإلكترونيات", },
  { imgSrc: "/make-up.svg", alt: "make_up", text: "التجميل", },
  { imgSrc: "/building.svg", alt: "construction", text: "البناء", },
];
