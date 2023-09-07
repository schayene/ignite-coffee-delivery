import { CoffeeInterface } from "./components/CoffeeCard";

import expressoTradicional from "../../../../assets/expresso-tradicional.png";
import expressoAmericano from "../../../../assets/expresso-americano.png";
import expressoCremoso from "../../../../assets/expresso-cremoso.png";
import expressoGelado from "../../../../assets/expresso-gelado.png";
import cafeComLeite from "../../../../assets/cafe-com-leite.png";
import latte from "../../../../assets/latte.png";
import capuccino from "../../../../assets/capuccino.png";
import macchiato from "../../../../assets/macchiato.png";
import mocaccino from "../../../../assets/mocaccino.png";
import chocolateQuente from "../../../../assets/chocolate-quente.png";
import cubano from "../../../../assets/cubano.png";
import havaiano from "../../../../assets/havaiano.png";
import arabe from "../../../../assets/arabe.png";
import irlandes from "../../../../assets/irlandes.png";

export const coffees: CoffeeInterface[] = [
  {
    id: "1",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: expressoTradicional,
    tags: [{ name: "Tradicional" }],
  },
  {
    id: "2",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: expressoAmericano,
    tags: [{ name: "Tradicional" }],
  },
  {
    id: "3",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: expressoCremoso,
    tags: [{ name: "Tradicional" }],
  },
  {
    id: "4",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: expressoGelado,
    tags: [{ name: "Tradicional" }, { name: "Gelado" }],
  },
  {
    id: "5",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    image: cafeComLeite,
    tags: [{ name: "Tradicional" }, { name: "Com leite" }],
  },
  {
    id: "6",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: latte,
    tags: [{ name: "Tradicional" }, { name: "Com leite" }],
  },
  {
    id: "7",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    image: capuccino,
    tags: [{ name: "Tradicional" }, { name: "Com leite" }],
  },
  {
    id: "8",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    image: macchiato,
    tags: [{ name: "Tradicional" }, { name: "Com leite" }],
  },
  {
    id: "9",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: mocaccino,
    tags: [{ name: "Tradicional" }, { name: "Com leite" }],
  },
  {
    id: "10",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: chocolateQuente,
    tags: [{ name: "Especial" }, { name: "Com leite" }],
  },
  {
    id: "11",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: cubano,
    tags: [{ name: "Especial" }, { name: "Alcoólico" }, { name: "Gelado" }],
  },
  {
    id: "12",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: havaiano,
    tags: [{ name: "Especial" }],
  },
  {
    id: "13",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: arabe,
    tags: [{ name: "Especial" }],
  },
  {
    id: "14",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: irlandes,
    tags: [{ name: "Especial" }, { name: "Alcoólico" }],
  },
];
