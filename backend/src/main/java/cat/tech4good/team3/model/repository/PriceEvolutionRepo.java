package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.PriceEvolution;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PriceEvolutionRepo extends MongoRepository<PriceEvolution, String> {


}
