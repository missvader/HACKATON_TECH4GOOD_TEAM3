package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.Fira;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FiraRepo extends MongoRepository<Fira,String> {
    List<Fira> findByDistricte(String string);

}
