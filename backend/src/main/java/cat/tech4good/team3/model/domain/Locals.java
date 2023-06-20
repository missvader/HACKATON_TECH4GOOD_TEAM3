package cat.tech4good.team3.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="locals")
public class Locals {
    private String nomSectorActivitat;
    private String nomGrupActivitat;
    private String nomActivitat;
    private String nomLocal;
    private int sNEix;
    private double latitud;
    private double longitud;
    private String direccioUnica;
    private String nomVia;
    private String nomBarri;
    private String nomDistricte;
}
