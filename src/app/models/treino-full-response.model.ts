import { AtletaTreinoDTO } from "./atleta-treino-dtomodel";

export class TreinoFullResponse {
    id!: number;
    local!: string;
    horario!: string;
    data!: string;
    listarAtletas!: AtletaTreinoDTO[];
}
