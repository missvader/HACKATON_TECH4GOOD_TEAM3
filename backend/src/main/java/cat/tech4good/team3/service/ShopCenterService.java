package cat.tech4good.team3.service;

import cat.tech4good.team3.model.domain.Mercat;
import cat.tech4good.team3.model.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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

    public List<Mercat> getMercats(){
return mercatsRepo.findAll();


    }


}
