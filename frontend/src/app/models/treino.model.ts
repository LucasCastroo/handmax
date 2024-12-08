import { AtletaTreinoDTO } from "./atleta-treino-dtomodel";
import { Categoria } from "./categoria.model";

export class Treino {
  id!: number;
  local!: string;
  dataHorario!: string; // yyyy-MM-dd
  criarTreinoTodosAtletas!: boolean;
  notificarAtletasAgora!: boolean;
  listarAtletas!: AtletaTreinoDTO[];
  listarCategorias!: Categoria[]
}
