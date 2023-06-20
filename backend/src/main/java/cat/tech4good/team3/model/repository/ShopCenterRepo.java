package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.ShopCenter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ShopCenterRepo extends MongoRepository<ShopCenter, String> {


}
