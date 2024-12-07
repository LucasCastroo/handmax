export interface PublicacaoDTO {
  id?: number; 
  titulo: string;
  conteudo: string;
  nomeImagem?: string; 
  dataPublicacao?: Date; 
  autorId?: number; 
}
