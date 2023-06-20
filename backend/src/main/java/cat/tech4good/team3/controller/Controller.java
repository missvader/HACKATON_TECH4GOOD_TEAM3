package cat.tech4good.team3.controller;


import cat.tech4good.team3.model.dto.GenericResponseDto;
import cat.tech4good.team3.model.repository.LocalsRepo;
import cat.tech4good.team3.service.ShopCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/bcn")
public class Controller {
    @Autowired
    ShopCenterService service;

    @Autowired
    LocalsRepo localsRepo;

    @GetMapping("/finder")
    public List<Object> finder(@RequestParam(required = false) String nomSectorActivitat ,@RequestParam (required = false) String nomActivitat,
     @RequestParam (required = false) String nomGrupActivitat ,@RequestParam (required = false) String nomLocal,
     @RequestParam (required = false) String sNEix,@RequestParam (required = false) String latitud,
     @RequestParam (required = false) String longitud ,@RequestParam (required = false) String direccioUnica,
     @RequestParam (required = false) String nomVia,@RequestParam (required = false) String nomBarri,
     @RequestParam (required = false) String nomDistricte  ) {

        List<Object> list = new ArrayList<>();

        if(nomActivitat !=null){
        list.add(localsRepo.findByNomActivitat(nomActivitat));
        }
        if(bars !=null){
            list.add(localsRepo.findByNomActivitat(bars));
        }if(nomActivitat !=null){
            list.add(localsRepo.findByNomActivitat(nomActivitat));
        }if(nomActivitat !=null){
            list.add(localsRepo.findByNomActivitat(nomActivitat));
        }if(nomActivitat !=null){
            list.add(localsRepo.findByNomActivitat(nomActivitat));
        }if(nomActivitat !=null){
            list.add(localsRepo.findByNomActivitat(nomActivitat));
        }if(nomActivitat !=null){
            list.add(localsRepo.findByNomActivitat(nomActivitat));
        }




        return list;

    }






}
