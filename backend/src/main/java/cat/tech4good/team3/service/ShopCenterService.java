package cat.tech4good.team3.service;

import cat.tech4good.team3.model.repository.*;
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
    @Autowired
    GaleriaRepo galeriaRepo;
    @Autowired
    FiraRepo firaRepo;
    @Autowired
    MercatsRepo mercatsRepo;




}
