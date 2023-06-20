package cat.tech4good.team3.service;

import cat.tech4good.team3.model.domain.Mercat;
import cat.tech4good.team3.model.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

    public List <Object> finder(String input){

        List<Object> list = new ArrayList<>();
        input.toLowerCase();
        switch (input){
            case ("mercat"):
                list.add(mercatsRepo.findAll());
                break;
            case ("fira"):
                list.add(firaRepo.findAll());
                break;
            case ("galeria"):
                list.add(galeriaRepo.findAll());
                break;
            default:


        }


        return list;
    }


    public List <Object> findByDistricte(String districte) {
        List<Object> list = new ArrayList<>();
        list.add(galeriaRepo.findByDistricte(districte));
        list.add(firaRepo.findByDistricte(districte));
        list.add(mercatsRepo.findByDistricte(districte));

    return list;

    }
}
