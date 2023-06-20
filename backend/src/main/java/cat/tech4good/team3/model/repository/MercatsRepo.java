package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.Fira;
import cat.tech4good.team3.model.domain.Mercat;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MercatsRepo extends MongoRepository<Mercat,String>{
    List<Fira> findByDistricte(String string);



}
