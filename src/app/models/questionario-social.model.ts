import { CondicoesMoradia } from './condicoes-moradia.model';

export interface QuestionarioSocial {
  rendaFamiliar: number;
  pessoasEmCasa: number;
  condicoesMoradia: CondicoesMoradia;
  cadastroNIS: boolean;
}
