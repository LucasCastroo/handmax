package br.org.handmaxx.repository;

import java.util.List;
import java.util.Optional;

import br.org.handmaxx.model.Atleta;
import br.org.handmaxx.model.Categoria;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class AtletaRepository implements PanacheRepository<Atleta> {
    //Método customizado para buscar atletas pelo nome
    public List<Atleta> findByNome(String nome) {
        return find("nome", nome).list();
    }

    // Exemplo de um método customizado para buscar por CPF
    public Atleta findByCpf(String cpf) {
        return find("cpf", cpf).firstResult();
    }

    public List<Atleta> findAtletasByTreinoId(Long treinoId) {
        return list("SELECT a FROM Treino t JOIN t.listaAtletas a WHERE t.id = ?1", treinoId);
    }    

    public List<Atleta> findByIds(List<Long> ids) {
        return list("id IN ?1", ids);
    }

    public Atleta findAtletaByToken(String token){
        return find("SELECT a from CadastroAtletaToken t JOIN t.atleta a WHERE t.token = ?1", token).singleResult();
    }
    
    public Optional<List<Atleta>> findByCategoria(Categoria categoria) {
        return Optional.ofNullable(list("categoria", categoria));
    }

    public List<Object[]> contarPorPessoasEmCasa() { 
        String query = """ 
                SELECT 
                    CASE WHEN a.dadosSociais.pessoasEmCasa BETWEEN 1 AND 2 THEN '1 a 2' 
                         WHEN a.dadosSociais.pessoasEmCasa BETWEEN 3 AND 4 THEN '3 a 4' 
                         WHEN a.dadosSociais.pessoasEmCasa BETWEEN 5 AND 6 THEN '5 a 6' 
                         ELSE '7 ou mais' END as faixa, 
                    COUNT(a) FROM Atleta a WHERE a.dadosSociais IS NOT NULL GROUP BY faixa
                """; 
        return getEntityManager().createQuery(query, Object[].class).getResultList(); 
    }

    public List<Object[]> contarPorCondicaoMoradia() {
        String query = """
            SELECT a.dadosSociais.condicoesMoradia, COUNT(a)
            FROM Atleta a
            WHERE a.dadosSociais IS NOT NULL
            GROUP BY a.dadosSociais.condicoesMoradia
        """;
        return getEntityManager().createQuery(query, Object[].class).getResultList();
    }       

    public List<Object[]> contarPorRendaFamiliar(double salarioMinimo) {
        String query = """
                SELECT
                    CASE WHEN a.dadosSociais.rendaFamiliar BETWEEN 1 * ?1 AND 2 * ?1 THEN '1 a 2 salários mínimos'
                         WHEN a.dadosSociais.rendaFamiliar BETWEEN 3 * ?1 AND 4 * ?1 THEN '3 a 4 salários mínimos'
                         WHEN a.dadosSociais.rendaFamiliar BETWEEN 5 * ?1 AND 6 * ?1 THEN '5 a 6 salários mínimos'
                         WHEN a.dadosSociais.rendaFamiliar BETWEEN 7 * ?1 AND 8 * ?1 THEN '7 a 8 salários mínimos'
                         ELSE '9 ou mais salários mínimos'
                    END as faixa,
                    COUNT(a) FROM Atleta a WHERE a.dadosSociais IS NOT NULL GROUP BY faixa """;
        return getEntityManager().createQuery(query, Object[].class).setParameter(1, salarioMinimo).getResultList();
    }

    public List<Object[]> contarPorCadastroNIS() {
        String query = """
            SELECT
                CASE
                    WHEN a.dadosSociais.cadastroNIS = TRUE THEN 'Sim'
                    ELSE 'Não'
                END as cadastroNIS,
                COUNT(a)
            FROM Atleta a
            WHERE a.dadosSociais IS NOT NULL
            GROUP BY cadastroNIS
        """;
        return getEntityManager().createQuery(query, Object[].class).getResultList();
    }
}
