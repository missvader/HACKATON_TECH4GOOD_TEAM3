package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.Fira;
import cat.tech4good.team3.model.domain.Galeria;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GaleriaRepo extends MongoRepository<Galeria, String> {
    List<Fira> findByDistricte(String string);

}
