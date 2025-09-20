import type { DropDownsData, SubOptions } from "./types";

export const dropDownsData: DropDownsData[] = [
  {
    id: 0,
    label: "status",
    options: [
      "pendente",
      "ativa",
      "desenvolvimento",
      "aprovada",
      "salvo local",
    ],
  },
  {
    id: 1,
    label: "tipo",
    options: ["padrão", "pós", "plano de aula"],
  },
  {
    id: 2,
    label: "data",
    options: ["hoje", "amanhã", "outra data"],
  },
];

export const subOptions: SubOptions[] = [
  {
    id: 0,
    optionName: "padrão",
    subOptions: [
      "imersão profissional",
      "experiência profissional",
      "prática pedagógica",
      "estágio supervisionado",
      "estágio curricular",
      "seminário interdisciplinar",
      "outros",
    ],
  },
];
