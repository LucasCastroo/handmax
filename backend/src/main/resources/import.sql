BEGIN;
-- Inserções para a tabela usuario (não mexi)
INSERT INTO usuario (id, datahoraatualizacao, datahoracriacao, email, login, senha)
VALUES
    --SENHA: senha1
    (1, '2024-09-23 14:41:29', '2024-09-23 14:41:29', 'lucasdaniel@unitins.br', 'usuario1', 'Csp1B3FE7ExIsmLUCT0FVSjsEviRumTRIAa6xujepRcSSx4iEKX96DaaeJlahnZQJWNSeAcK+wMLHEjK6QEGQw=='),
    --SENHA: senha2
    (2, '2024-09-23 14:41:29', '2024-09-23 14:41:29', 'joaopaulo@gmail.com', 'usuario2', '0hA2bYWKI8y54epeHAaLy6dtROowgFxQWaz1nqQo8/I3RJ/607nbFlzICXKB8LiduecPFH9tcY/GbfewNimxtw==');
    
-- Inserções para a tabela endereco
INSERT INTO endereco (id, datahoraatualizacao, datahoracriacao, cep, logradouro, numerolote, complemento, localidade, UF)
VALUES
    (1, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-906', 'Praça dos Girassóis', 'S/N', 'Esplanada das Secretarias', 'Palmas', 'TO'),
    (2, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-906', 'Praça dos Girassóis', 'S/N', 'Esplanada das Secretarias', 'Palmas', 'TO'),
    (3, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-907', 'Rua 32', '101', 'Apartamento 102', 'Palmas', 'TO'),
    (4, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-908', 'Avenida JK', '200', 'Próximo à Praça', 'Palmas', 'TO'),
    (5, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-909', 'Rua 15', '120', 'Apartamento 203', 'Palmas', 'TO'),
    (6, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-910', 'Rua 45', '150', 'Bloco B', 'Palmas', 'TO'),
    (7, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-911', 'Avenida Tocantins', '300', 'Próximo à praça do relógio', 'Palmas', 'TO'),
    (8, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-912', 'Rua das Palmeiras', '50', 'Casa 10', 'Palmas', 'TO'),
    (9, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-913', 'Rua 40', '102', 'Apto 303', 'Palmas', 'TO'),
    (10, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-914', 'Rua 50', '300', 'Condomínio Solar', 'Palmas', 'TO'),
    (11, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-915', 'Rua 62', '250', 'Loja 5', 'Palmas', 'TO'),
    (12, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-916', 'Avenida Leste', '400', 'Bloco A', 'Palmas', 'TO'),
    (13, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-917', 'Rua das Margaridas', '90', 'Casa 12', 'Palmas', 'TO'),
    (14, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-918', 'Avenida JK', '500', 'Próximo ao mercado central', 'Palmas', 'TO'),
    (15, '2024-09-23 14:41:29', '2024-09-23 14:41:29', '77001-918', 'Avenida JK', '500', 'Próximo ao mercado central', 'Palmas', 'TO');

-- Inserções para a tabela questionariosocial
INSERT INTO questionariosocial (id, datahoraatualizacao, datahoracriacao, cadastronis, pessoasemcasa, rendafamiliar, condicoesMORADIA) 
VALUES 
    (1, '2024-09-23 14:41:29', '2024-09-23 14:41:29', true, 3, 200.00, 'PESSIMA'),
    (2, '2024-09-23 14:41:29', '2024-09-23 14:41:29', true, 3, 200.00, 'RUIM'),
    (3, '2024-09-23 14:41:29', '2024-09-23 14:41:29', false, 2, 250.00, 'BOA'),
    (4, '2024-09-23 14:41:29', '2024-09-23 14:41:29', false, 4, 300.00, 'EXCELENTE'),
    (5,'2024-09-23 14:41:29', '2024-09-23 14:41:29', true, 5, 400.00, 'BOA'),
    (6, '2024-09-23 14:41:29', '2024-09-23 14:41:29', true, 1, 180.00, 'RUIM'),
    (7, '2024-09-23 14:41:29', '2024-09-23 14:41:29', false, 3, 350.00, 'PESSIMA'),
    (8, '2024-09-23 14:41:29', '2024-09-23 14:41:29', false, 6, 420.00, 'EXCELENTE'),
    (9, '2024-09-23 14:41:29', '2024-09-23 14:41:29', true, 4, 500.00, 'BOA'),
    (10, '2024-09-23 14:41:29', '2024-09-23 14:41:29', true, 2, 600.00, 'REGULAR'),
    (11, '2024-09-23 14:41:29', '2024-09-23 14:41:29', false, 5, 550.00, 'PESSIMA'),
    (12, '2024-09-23 14:41:29', '2024-09-23 14:41:29', true, 7, 700.00, 'BOA'),
    (13, '2024-09-23 14:41:29', '2024-09-23 14:41:29', false, 8, 800.00, 'EXCELENTE'),
    (14, '2024-09-23 14:41:29', '2024-09-23 14:41:29', false, 8, 800.00, 'EXCELENTE');

-- Inserções para a tabela atleta
INSERT INTO atleta (id, categoria, datanascimento, dadossociais_id, datahoraatualizacao, datahoracriacao, endereco_id, cpf, nome, sexo, cadastrocompleto, telefone)
	VALUES (1, 0, '1975-05-28', 1, '2024-09-23 14:41:29', '2024-09-23 14:41:29', 1, '58591885287', 'Helena Rodrigues', 'FEMININO', false, '63981590132'),
           (2, 1, '2001-09-27', 2, '2024-09-23 14:41:30', '2024-09-23 14:41:30', 2, '03809323910', 'Marcelo Alves', 'MASCULINO', false, '63992154511'),
           (3, 0, '1999-11-14', 3, '2024-09-23 14:41:31', '2024-09-23 14:41:31', 3, '01457923188', 'Lucas Soares', 'MASCULINO', true, '63992467030'),
           (4, 1, '2003-08-05', 4, '2024-09-23 14:41:32', '2024-09-23 14:41:32', 4, '02159813245', 'Ana Souza', 'FEMININO', true, '63994211788'),
           (5, 1, '2002-12-01', 5, '2024-09-23 14:41:33', '2024-09-23 14:41:33', 5, '03129816412', 'José Oliveira', 'MASCULINO', false, '63991234567'),
           (6, 0, '2005-03-12', 6, '2024-09-23 14:41:34', '2024-09-23 14:41:34', 6, '01549976325', 'Carlos Silva', 'MASCULINO', true, '63998765432'),
           (7, 0, '2000-07-22', 7, '2024-09-23 14:41:35', '2024-09-23 14:41:35', 7, '02950654799', 'Gabriel Almeida', 'MASCULINO', true, '63995123456'),
           (8, 1, '2003-11-11', 8, '2024-09-23 14:41:36', '2024-09-23 14:41:36', 8, '03582649120', 'Roberta Lima', 'FEMININO', true, '63996014851'),
           (9, 1, '1998-06-30', 9, '2024-09-23 14:41:37', '2024-09-23 14:41:37', 9, '01249567348', 'Maria Pereira', 'FEMININO', false, '63994567832'),
           (10, 0, '2006-02-17', 10, '2024-09-23 14:41:38', '2024-09-23 14:41:38', 10, '02467985462', 'Filipe Dias', 'MASCULINO', true, '63984969981');

-- Inserções para a tabela treino
INSERT INTO treino (id, local, datahorario, datahoraatualizacao, datahoracriacao, datahorarionotificacao)
VALUES
    (1, 'Campo A', '2024-12-08T08:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-07T18:00:00'),
    (2, 'Campo B', '2024-12-09T09:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-08T18:00:00'),
    (3, 'Campo C', '2024-12-10T10:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-09T18:00:00'),
    (4, 'Campo D', '2024-12-11T11:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-10T18:00:00'),
    (5, 'Campo E', '2024-12-12T12:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-11T18:00:00'),
    (6, 'Campo F', '2024-12-13T13:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-12T18:00:00'),
    (7, 'Campo G', '2024-12-14T14:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-13T18:00:00'),
    (8, 'Campo H', '2024-12-15T15:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-14T18:00:00'),
    (9, 'Campo I', '2024-12-03T16:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-02T18:00:00'),
    (10, 'Campo J', '2024-12-04T17:00:00', '2024-09-23T14:41:29', '2024-09-23T14:41:29', '2024-12-03T18:00:00');


-- Inserções para a tabela atletas_treino
INSERT INTO atletas_treino (treino_id, atleta_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10),
    (1, 2),
    (2, 3),
    (3, 4),
    (4, 5),
    (5, 6),
    (6, 7),
    (7, 8),
    (8, 9),
    (9, 10),
    (10, 1),
    (1, 3),
    (2, 4),
    (3, 5),
    (4, 6),
    (5, 7),
    (6, 8),
    (7, 9),
    (8, 10),
    (9, 1),
    (10, 2);

insert into publicacao (
   usuario_id,
   conteudo,
   datahoraatualizacao,
   datahoracriacao,
   datapublicacao,
   nomeimagem,
   titulo
) values ( 1,
           '<div style="text-align: center;"><img src="http://localhost:8080/noticias/download/imagem/OIP.jpg" alt="9133394e-60f5-4500-9015-61fd5488b83a.jpeg" style="color: var(--ion-color-light); font-size: 1rem; text-align: initial; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; height: auto;"></div><div style="text-align: center;"><i>Confira como foi o gol do título do Handmax.</i></div><p style="text-align: justify;">A escolinha de Handebol Handmax alcançou um feito histórico neste último fim de semana ao se consagrar campeã do Campeonato Estadual de Handebol, realizado em Palmas. A equipe, formada por jovens promissores do esporte, mostrou determinação e habilidade ao longo da competição, superando adversários de peso e levando o troféu para casa.</p><p style="text-align: justify;">O torneio, que reuniu as principais equipes do estado, foi um verdadeiro teste de resistência e talento. Com um elenco técnico e dedicado, a Handmax se destacou pela forte defesa e ataque preciso, garantindo vitórias nas fases mais decisivas. O time demonstrou um entrosamento exemplar e um espírito de equipe que conquistou a torcida e impressionou os adversários.</p><p style="text-align: justify;">Os atletas, que treinaram arduamente para chegar à final, comemoraram a conquista com muita emoção. O trabalho de base da escolinha foi destacado como um dos maiores responsáveis pelo sucesso, com treinamentos intensivos e a orientação de técnicos experientes que moldaram cada jogador para se destacar em sua posição.</p><p style="text-align: justify;">Este título não é apenas uma vitória para os atletas e treinadores da Handmax, mas também para o Handebol no estado, mostrando o crescimento do esporte e o potencial da nova geração. A Handmax segue com seus planos de continuar formando atletas de alto nível e, claro, almeja mais conquistas no futuro próximo.</p>',
           now(),
           now(),
           now(),
           'OIP.jpg',
           'Handmax Conquista o Campeonato Estadual de Handebol em Palmas' ),
           ( 1,
           'Fala, galera!
            Já falamos aqui dos benefícios que o esporte traz, principalmente o Handebol, mas hoje viemos contar uma novidade do Hand Max.
            Para você que já foi atleta de Hand e gostaria de voltar a praticar esse esporte, abrimos agora os treinos para a categoria ADULTO FEMININO.
            Time para mulheres que são ativas, que gostam e querem se exercitar e que estão em busca de manter a saúde, o condicionamento e o bem-estar físico e mental.',
           now(),
           now(),
           now(),
           'Postagem2.jpg',
           'Handmax abre treinos para categoria ADULTO FEMININO' ),
            ( 1,
           'Tem uma história linda de compartilhamento e conquistas dessa MULHER que INSPIRA jovens atletas na
            SUPERAÇÃO e transformação de suas vidas.

            "Trabalhamos com valores, regras de convivência, saber acolher e participar independente da idade. O nosso principal ensinamento é compartilhar. Os que têm podem ajudar de boa vontade os que necessitam. Muitas vezes trabalhamos com a família, e a estudante Jhemylle foi destaque dentro e fora da quadra"
            (Hidenildes Alves)

            Confira a matéria completa: https://www.to.gov.br/seduc',
           now(),
           now(),
           now(),
           'Postagem3.jpg',
           'Conheça a historia de HIDENILDES ALVES' ),
           ( 1,
           'Que dia!..
            Agora sim, somos a Associação Sócio - Esportiva
            HandMax - Handebol para Todos.
            No peito, só alegria e muita gratidão!',
           now(),
           now(),
           now(),
           'Postagem4.jpg',
           'Agora somos oficiais!' )
      ;