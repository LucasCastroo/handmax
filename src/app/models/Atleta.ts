import { Categoria } from './Categoria';
import { Endereco } from './Endereco';
import { QuestionarioSocial } from './QuestionarioSocial';
import { Sexo } from './Sexo';

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
