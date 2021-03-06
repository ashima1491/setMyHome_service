package edu.tamu.istm631.team17.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.tamu.istm631.team17.models.Person;

public interface PersonRepo extends CrudRepository<Person, Integer>
{

    Person findByemailid(String emailid);
    
    @Query("SELECT u FROM Person u WHERE LOWER(u.emailid) = LOWER(:emailid) and u.password = :password")
    public Person authenticate(@Param("emailid") String emailid, @Param("password") String password);

    
//     List<Person> findBytype (String type);
}
