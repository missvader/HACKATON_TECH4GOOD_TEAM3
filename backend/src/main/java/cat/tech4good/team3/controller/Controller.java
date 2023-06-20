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
public List<Object> finder(@RequestParam(required=false)String districte, @RequestBody String string){
    List <Object> list = new ArrayList<>();


    if(districte !=null){
      list.add(  service.findByDistricte(districte));
    }

   list.add( service.finder(string));

    return  list;

}






}
