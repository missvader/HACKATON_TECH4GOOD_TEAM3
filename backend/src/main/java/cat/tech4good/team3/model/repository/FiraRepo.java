package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.Fira;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FiraRepo extends MongoRepository<Fira,String> {
}
