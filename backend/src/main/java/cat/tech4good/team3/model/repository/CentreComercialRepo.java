package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.CentreComercial;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CentreComercialRepo extends MongoRepository<CentreComercial,String> {
}
