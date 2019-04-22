package edu.tamu.istm631.team17.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import edu.tamu.istm631.team17.models.Event;
import edu.tamu.istm631.team17.repo.EventRepo;

/**
 * This class is a controller for forwarding requests for giveaway 
 * event related activity. 
 * 
 *
 */


@RestController    
@RequestMapping(path="/event") 
@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

public class EventController
{

	@Autowired 
	private EventRepo eventRepo;

	
	/**
    * This method adds a new event into the database
    *
    *@return true if event created successfully
    *  
    */
	@PostMapping(path="/add") 
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public @ResponseBody String addNewEvent (@RequestBody Event event) {
		
		System.out.println(event.getName()+" hii ");
		eventRepo.save(event);
		return "true";
	}
	
	/**
	    * This method retrieves all events
	    *
	    *@return list of events
	    *  
	    */

	@GetMapping(path="/all")
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public List<Event> getAllEvents() {
		// This returns a JSON or XML with the users
		return eventRepo.fetchAll();
	}
	
	
	
	
	
	
}
