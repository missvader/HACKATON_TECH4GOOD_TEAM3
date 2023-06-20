package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.Galeria;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GaleriaRepo extends MongoRepository<Galeria, String> {
}
