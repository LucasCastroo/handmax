import { AtletaTreinoDTO } from "./atleta-treino-dtomodel";

export class Treino {
  id!: number;
  local!: string;
  data!: string; // yyyy-MM-dd
  horario!: string; // HH:mm
  criarTreinoTodosAtletas!: boolean;
  listarAtletas!: AtletaTreinoDTO[];
}
