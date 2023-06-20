package cat.tech4good.team3.controller;


import cat.tech4good.team3.model.dto.GenericResponseDto;
import cat.tech4good.team3.service.ShopCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/bcn")
public class Controller {
@Autowired
    ShopCenterService service;

@GetMapping("/finder")
public List<GenericResponseDto> finder(@RequestBody String string){

    List<GenericResponseDto> answer = new ArrayList<>();
    answer.add((GenericResponseDto) service.getMercats());
    return answer ;

}






}
