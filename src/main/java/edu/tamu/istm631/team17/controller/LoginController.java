package edu.tamu.istm631.team17.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import edu.tamu.istm631.team17.models.Person;
import edu.tamu.istm631.team17.repo.PersonRepo;




@RestController    
@RequestMapping(path="/login") 
//@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

public class LoginController
{

	@Autowired 
	private PersonRepo userRepo;

	@PostMapping(path="/add") 
//	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public @ResponseBody String addNewUser (@RequestBody Person user) {
		
		Person person=userRepo.findByemailid(user.getEmailid());
		if(null==person)
		{
			userRepo.save(user);
			return "true";
		}
		else
		{
			return "A user with this email already exists!";
		}
		
	}

	@GetMapping(path="/all")
//	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public @ResponseBody Iterable<Person> getAllUsers() {
		return userRepo.findAll();
	}
	
	@GetMapping(path="/test")
//	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public String test() {
		return "working!";
	}
	
	
	@GetMapping(path="/getOne/{emailid}")
//	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public @ResponseBody Person getUser(@PathVariable String emailid) {
		return userRepo.findByemailid(emailid);
	}
	
	@PostMapping(path="/authenticate") 
//	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public Person authenticate (@RequestBody Person user) {
		
		System.out.println(user.getEmailid()+" hii "+user.getPassword());
		return userRepo.authenticate(user.getEmailid(), user.getPassword());
		
	}
	
	
	
}
