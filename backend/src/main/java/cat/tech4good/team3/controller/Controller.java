package cat.tech4good.team3.controller;


import cat.tech4good.team3.model.dto.GenericResponseDto;
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

    @GetMapping("/finder")
    public List<Object> finder(@RequestParam(required = false) String districte, @RequestParam(required = false) String key /**,@RequestParam (required = false) String restaurants,
     @RequestParam (required = false) String bars ,@RequestParam (required = false) String roba,
     @RequestParam (required = false) String perruqueries,@RequestParam (required = false) String supermercat,
     @RequestParam (required = false) String pa ,@RequestParam (required = false) String estetica,
     @RequestParam (required = false) String reparacions,@RequestParam (required = false) String farmaciaISanitat,
     @RequestParam (required = false) String carnisseria,@RequestParam (required = false) String fruitesIVerdures,
     @RequestParam (required = false) String joieria, @RequestParam (required = false) String peix, @RequestParam (required = false) String equipamentLlar,
     @RequestParam (required = false) String calçat  @RequestBody String string**/) {
        List<Object> list = new ArrayList<>();


        if (districte != null) {
            list.add(service.findByDistricte(districte));
        }

        if (key != null) {
            list.add(service.findKey(districte));
        }

        if(key==null && districte ==null){
            list.add("Selecciona una opció!");
        }

        return list;

    }


}
