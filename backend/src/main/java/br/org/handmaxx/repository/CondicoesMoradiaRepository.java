package br.org.handmaxx.repository;

import java.util.List;

import br.org.handmaxx.model.CondicoesMoradia;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CondicoesMoradiaRepository implements PanacheRepository<CondicoesMoradia> {
}
