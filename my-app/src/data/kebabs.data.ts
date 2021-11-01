import breads, { Bread } from "./breads.data";
import fillings, { Filling } from "./fillings.data";
import meats, { Meat } from "./meats.data";
import sauces, { Sauce } from "./sauces.data";

export interface Kebab {
  name?: string;
  slug?: string;
  price?: number;
  image?: string;
  bread?: Bread;
  meat?: Meat;
  fillings?: Filling[];
  sauces?: Sauce[];
}

const kebabs: Kebab[] = [
  {
    name: "L'ancien",
    slug: "ancien",
    price: 5.5,
    image: `${process.env.PUBLIC_URL}/assets/kebabs/kebab-classic.jpg`,
    bread: breads.find((bread) => bread.slug === "pain")!!,
    meat: meats.find((meat) => meat.slug === "viande")!!,
    fillings: fillings.filter(
      (filling) =>
        filling.slug === "salade" ||
        filling.slug === "tomate" ||
        filling.slug === "oignon"
    ),
    sauces: sauces.filter((sauce) => sauce.slug === "blanche"),
  },
  {
    name: "Le moldu",
    slug: "mold",
    price: 6.0,
    image: `${process.env.PUBLIC_URL}/assets/kebabs/kebab-vege.jpg`,
    bread: breads.find((bread) => bread.slug === "pain")!!,
    meat: meats.find((meat) => meat.slug === "tofu")!!,
    fillings: fillings.filter((filling) => false),
    sauces: sauces.filter((sauce) => sauce.slug === "blanche"),
  },
  {
    name: "Le radical",
    slug: "radical",
    price: 6.0,
    image: `${process.env.PUBLIC_URL}/assets/kebabs/kebab-bbq.jpg`,
    bread: breads.find((bread) => bread.slug === "pain")!!,
    meat: meats.find((meat) => meat.slug === "viande")!!,
    fillings: fillings.filter(
      (filling) =>
        filling.slug === "salade" ||
        filling.slug === "tomate" ||
        filling.slug === "oignon"
    ),
    sauces: sauces.filter((sauce) => sauce.slug === "harissa"),
  },
];
export default kebabs;
