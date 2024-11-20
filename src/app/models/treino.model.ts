import { AtletaTreinoDTO } from "./AtletaTreinoDTO.model";

export class Treino {
  id!: number;
  local!: string;
  data!: string; // yyyy-MM-dd
  horario!: string; // HH:mm
  criarTreinoTodosAtletas!: boolean;
  listarAtletas!: AtletaTreinoDTO[];
}
