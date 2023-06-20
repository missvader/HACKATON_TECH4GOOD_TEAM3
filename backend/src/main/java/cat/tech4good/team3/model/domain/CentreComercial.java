package cat.tech4good.team3.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="centreComercial")
public class CentreComercial {

    private int personalId;
    private String centreComercial;
    private String carrer;
    private String barri;
    private String districte;
    private double coordenadaX;
    private double coordenadaY;
}
