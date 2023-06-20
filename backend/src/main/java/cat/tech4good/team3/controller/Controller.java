package cat.tech4good.team3.controller;


import cat.tech4good.team3.model.dto.GenericResponseDto;
import cat.tech4good.team3.model.repository.LocalsRepo;
import cat.tech4good.team3.service.ShopCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/bcn")
public class Controller {
    @Autowired
    ShopCenterService service;

    @Autowired
    LocalsRepo localsRepo;

    @GetMapping("/finder")
    public    List<Object>  finder(@RequestParam(required = false) String nomSectorActivitat, @RequestParam(required = false) String nomActivitat,
                               @RequestParam(required = false) String nomGrupActivitat, @RequestParam(required = false) String nomLocal,
                               @RequestParam(required = false) String sNEix, @RequestParam(required = false) String latitud,
                               @RequestParam(required = false) String longitud, @RequestParam(required = false) String direccioUnica,
                               @RequestParam(required = false) String nomVia, @RequestParam(required = false) String nomBarri,
                               @RequestParam(required = false) String nomDistricte) {

        List<Object> list = new ArrayList<>();

        if (nomActivitat != null) {
            list.add(localsRepo.findByNomActivitat(nomActivitat));
        }
        if (nomSectorActivitat != null) {
            list.add(localsRepo.findByNomActivitat(nomSectorActivitat));
        }
        if (nomGrupActivitat != null) {
            list.add(localsRepo.findByNomActivitat(nomGrupActivitat));
        }
        if (nomLocal != null) {
            list.add(localsRepo.findByNomActivitat(nomLocal));
        }
        if (sNEix != null) {
            list.add(localsRepo.findByNomActivitat(sNEix));
        }
        if (latitud != null) {
            list.add(localsRepo.findByNomActivitat(latitud));
        }
        if (longitud != null) {
            list.add(localsRepo.findByNomActivitat(longitud));
        }
        if (direccioUnica != null) {
            list.add(localsRepo.findByNomActivitat(direccioUnica));
        }
        if (nomVia != null) {
            list.add(localsRepo.findByNomActivitat(nomVia));
        }
        if (nomBarri != null) {
            list.add(localsRepo.findByNomActivitat(nomBarri));
        }
        if (nomDistricte != null) {
            list.add(localsRepo.findByNomActivitat(nomDistricte));
        }
        if (nomActivitat != null && nomSectorActivitat != null && nomGrupActivitat != null && nomLocal != null && sNEix != null && latitud != null
                && longitud != null && direccioUnica != null && nomVia != null && nomBarri != null && nomDistricte != null) {
            list.add("Introdueix dades!");

        }


      /**  List<Object> resultado = list.stream()
                .flatMap(o -> ((List<Object>) o).stream())
                .map(Object::toString)
                .collect(Collectors.toList());**/

        return list;

    }


}
