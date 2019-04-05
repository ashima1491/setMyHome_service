package edu.tamu.istm631.team17.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
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
public class LoginController
{

	@Autowired 
	private PersonRepo userRepo;

	@PostMapping(path="/add") 
	public @ResponseBody String addNewUser (@RequestBody Person user) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		/*User n = new User();
		n.setName(name);
		n.setEmail(email);*/
		System.out.println(user.getFname()+" hii ");
		userRepo.save(user);
		return "true";
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<Person> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepo.findAll();
	}
	
	@GetMapping(path="/test")
	public String test() {
		// This returns a JSON or XML with the users
		return "working!";
	}
	
	
	@GetMapping(path="/getOne/{emailid}")
	public @ResponseBody Iterable<Person> getUser(@PathVariable String emailid) {
		// This returns a JSON or XML with the users
		return userRepo.findByemailid(emailid);
	}
	
	@PostMapping(path="/authenticate") 
	public Person authenticate (@RequestBody Person user) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		/*User n = new User();
		n.setName(name);
		n.setEmail(email);*/
		System.out.println(user.getEmailid()+" hii "+user.getPassword());
		return userRepo.authenticate(user.getEmailid(), user.getPassword());
		
	}
	
	
}
