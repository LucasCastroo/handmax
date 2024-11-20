import { AtletaTreinoDTO } from "./AtletaTreinoDTO.model";

export class TreinoFullResponse {
    id!: number;
    local!: string;
    horario!: string;
    data!: string;
    listarAtletas!: AtletaTreinoDTO[];
}
