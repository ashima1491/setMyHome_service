package edu.tamu.istm631.team17.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import edu.tamu.istm631.team17.models.User;

public interface UserRepo extends CrudRepository<User, Integer>
{

    List<User> findByemailid(String emailid);

}
