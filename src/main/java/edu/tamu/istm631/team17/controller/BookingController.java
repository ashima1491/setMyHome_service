package edu.tamu.istm631.team17.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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
import edu.tamu.istm631.team17.models.BookingFurniture;
import edu.tamu.istm631.team17.models.BookingInput;
import edu.tamu.istm631.team17.models.Event;
import edu.tamu.istm631.team17.models.Furniture;
import edu.tamu.istm631.team17.models.Person;
import edu.tamu.istm631.team17.repo.BookingRepo;
import edu.tamu.istm631.team17.repo.EventRepo;
import edu.tamu.istm631.team17.repo.FurnitureRepo;
import edu.tamu.istm631.team17.repo.PersonRepo;




@RestController    
@RequestMapping(path="/booking") 
//@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

public class BookingController
{

	@Autowired 
	private BookingRepo bookingRepo;
	
	@Autowired 
	private PersonRepo personRepo;
	
	@Autowired 
	private EventRepo eventRepo;

	
	@Autowired 
	private FurnitureRepo furnitureRepo;

	@PostMapping(path="/add") 
//	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public @ResponseBody String addNewBooking (@RequestBody Booking bookingInput) {
		
		Optional<Event> event=eventRepo.findById(bookingInput.getEvent().getEventId());
		Optional<Person> person=personRepo.findById(bookingInput.getPerson().getUserId());

		Booking booking = new Booking();
		booking.setEvent(event.get());
		booking.setPerson(person.get());
		booking.setTimeSlot(bookingInput.getTimeSlot());
		
		Set<BookingFurniture> set= new HashSet<>();
		for(BookingFurniture  bff: bookingInput.getBookedFurniture())
		{
			Optional<Furniture> furniture=furnitureRepo.findById(bff.getFurniture().getFurnitureId());
			BookingFurniture bf= new BookingFurniture(furniture.get(),bff.getCount());
			bf.setBooking(booking);
			set.add(bf);
		}
		booking.setBookedFurniture(set);
		
		bookingRepo.save(booking);
		return "true";
	}

	@GetMapping(path="/fetch/{userId}") 
//	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public List<Booking> fetchByUser (@PathVariable Integer userId) {
		
		Optional<Person> person= personRepo.findById(userId);
		return bookingRepo.findByperson(person.get());
		
	}
	


	
	
	
	
	@GetMapping(path="/fetchAll") 
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public List<Booking> fetchAll () {
		
		return bookingRepo.fetchAll();
		
	}
	
	
	
}
