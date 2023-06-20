package cat.tech4good.team3.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="PriceEvolution")
public class PriceEvolution {
    private int personalId;
    private int districte;
    private String barris;
    private String preu2008;
    private String preu2009;
    private String preu2010;
    private String preu2011;


}
