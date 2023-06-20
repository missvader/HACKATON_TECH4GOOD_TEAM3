package cat.tech4good.team3.service;

import cat.tech4good.team3.model.repository.PriceEvolutionRepo;
import cat.tech4good.team3.model.repository.ShopCenterRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ShopCenterService {
    @Autowired
    ShopCenterRepo shopCenterRepo;
    @Autowired
    PriceEvolutionRepo priceEvolutionRepo;


}
