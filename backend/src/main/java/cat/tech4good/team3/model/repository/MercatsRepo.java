package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.Mercat;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MercatsRepo extends MongoRepository<Mercat,String>{



}
