package edu.tamu.istm631.team17.controller;

import java.util.List;

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

import edu.tamu.istm631.team17.models.Booking;
import edu.tamu.istm631.team17.models.Person;
import edu.tamu.istm631.team17.repo.BookingRepo;
import edu.tamu.istm631.team17.repo.PersonRepo;




@RestController    
@RequestMapping(path="/booking") 
@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

public class BookingController
{

	@Autowired 
	private BookingRepo bookingRepo;

	@PostMapping(path="/add") 
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public @ResponseBody String addNewBooking (@RequestBody Booking booking) {
		
		System.out.println(booking.getTimeSlot()+" hii ");
		bookingRepo.save(booking);
		return "true";
	}

	@GetMapping(path="/fetch/{username}") 
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public List<Booking> fetchBy (@PathVariable String username) {
		
		return bookingRepo.findByuserName(username);
		
	}

	
	
	
	
	@GetMapping(path="/fetchAll") 
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public List<Booking> fetchAll () {
		
		return bookingRepo.fetchAll();
		
	}
	
	
	
}
