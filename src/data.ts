interface DropDownsData {
  id: number;
  status?: string[];
  tipo?: string[];
  data?: string[];
}

export const dropDownsData: DropDownsData[] = [
  {
    id: 0,
    status: ["pendente", "ativa", "desenvolvimento", "aprovada", "salvo local"],
  },
  {
    id: 1,
    tipo: ["padrão", "pós", "plano de aula"],
  },
  {
    id: 2,
    data: ["hoje", "amanhã", "outra data"],
  },
];

// export const inputs = [
//     {
//         label: "Cód. Sydle:",
//     },
//     {

//     }
// ]
