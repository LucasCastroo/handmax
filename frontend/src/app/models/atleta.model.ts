import { Categoria } from './categoria.model';
import { Endereco } from './endereco.model';
import { QuestionarioSocial } from './questionario-social.model';
import { Sexo } from './sexo.model';

export class Atleta {
  id!: number;
  nome!: string;
  cpf!: string;
  categoria!: Categoria;
  dataNascimento!: Date;
  sexo!: Sexo;
  endereco!: Endereco;
  dadosSociais!: QuestionarioSocial;
  telefone!: string;
}
