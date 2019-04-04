package edu.tamu.istm631.team17.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.tamu.istm631.team17.models.User;

public interface UserRepo extends CrudRepository<User, Integer>
{

    List<User> findByemailid(String emailid);
    
    @Query("SELECT u FROM User u WHERE LOWER(u.emailid) = LOWER(:emailid) and u.password = :password")
    public User authenticate(@Param("emailid") String emailid, @Param("password") String password);

}
