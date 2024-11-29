export interface PublicacaoDTO {
  id?: number;
  titulo: string;
  conteudos: string[]; 
  nomeImagens: string[]; 
  dataPublicacao?: Date;
  autorId?: number;
}
