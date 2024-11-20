import { Categoria } from './categoria.model';
import { Endereco } from './endereco.model';
import { QuestionarioSocial } from './questionario-social.model';
import { Sexo } from './sexo.model';

export interface Atleta {
  id?: number;
  nome: string;
  cpf: string;
  categoria: Categoria;
  dataNascimento?: Date;
  sexo?: Sexo;
  endereco?: Endereco;
  questionario?: QuestionarioSocial;
  telefone?: string;
}
