package cat.tech4good.team3.model.repository;

import cat.tech4good.team3.model.domain.Locals;
import org.springframework.cglib.core.Local;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LocalsRepo extends MongoRepository<Locals,String> {
    public List<Locals> findByNomSectorActivitat(String nom);
    public List<Locals> findByNomGrupActivitat(String nom);
    public List<Locals> findByNomActivitat(String nom);
    public List<Locals> findByNomLocal(String nom);
    public List<Locals> findBySNEix(String nom);
    public List<Locals> findByLatitud(String nom);
    public List<Locals> findByLongitud(String nom);
    public List<Locals> findByDireccioUnica(String nom);
    public List<Locals> findByNomVia(String nom);
    public List<Locals> findByNomBarri(String nom);
    public List<Locals> findByNomDistricte(String nom);


}
