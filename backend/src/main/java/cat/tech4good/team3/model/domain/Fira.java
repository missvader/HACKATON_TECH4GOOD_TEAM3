package cat.tech4good.team3.model.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="fires")
public class Fira {

private int idPersonal;
private String fira;
private String carrer;

private String barri;
private String districte;
private double coordenadaX;
private double coordenadaY;


}
