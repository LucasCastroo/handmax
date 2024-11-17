import { CondicoesMoradia } from './CondicoesMoradia';

export interface QuestionarioSocial {
  rendaFamiliar: number;
  pessoasEmCasa: number;
  condicoesMoradia: CondicoesMoradia;
  cadastroNIS: boolean;
}
