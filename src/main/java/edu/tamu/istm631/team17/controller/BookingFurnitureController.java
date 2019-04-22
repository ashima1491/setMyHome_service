package edu.tamu.istm631.team17.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.tamu.istm631.team17.models.Booking;
import edu.tamu.istm631.team17.models.BookingFurniture;
import edu.tamu.istm631.team17.models.Furniture;
import edu.tamu.istm631.team17.repo.BookingFurnitureRepo;
import edu.tamu.istm631.team17.repo.EventRepo;
import edu.tamu.istm631.team17.repo.FurnitureRepo;


/**
 * This class is a controller for forwarding requests for 
 * booked furniture related activity. 
 * 
 *
 */

@RestController    
@RequestMapping(path="/bookedFurniture") 
@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

public class BookingFurnitureController {

	
	@Autowired 
	private BookingFurnitureRepo bookingFurnitureRepo;
	
	@Autowired 
	private FurnitureRepo furnitureRepo;
	
	
	/**
	    * This method retreives the furniture with their maximum quantity available
	    * for giveaway. It is calculated by subtracting the booked furniture by students from
	    * the furniture donated by donors
	    *
	    *
	    *@return list of furniture with quantity wrapped in BookingFurniture object
	    *  
	    */
	
	@GetMapping(path="/stock") 
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})
        public List<BookingFurniture> stock () {
		
		Iterable<BookingFurniture> bookedFurniture =bookingFurnitureRepo.findAll();
		HashMap<Integer, Integer> map = new HashMap<>();
		
		for(BookingFurniture bf: bookedFurniture)
		{
			Integer key= bf.getFurniture().getFurnitureId();
			String type= bf.getBooking().getPerson().getType();
			Integer qty= bf.getCount();
			
			if(map.containsKey(key))
			{
				if("donor".equals(type))
				map.put(key, map.get(key)+qty);
				
				if("student".equals(type))
				map.put(key, map.get(key)-qty);
			}
			else
			{
				    if("donor".equals(type))
				    {
				    	map.put(key, qty);
				    	
				    }
					
					
					if("student".equals(type))
					map.put(key, -qty);
				
			}
		}
		
	    Iterable<Furniture> furnitures= furnitureRepo.findAll();
	    
	    for(Furniture fr : furnitures  )
	    {
	    	if(!map.containsKey(fr.getFurnitureId()))
	    	{
	    		map.put(fr.getFurnitureId(), 0);
	    	}
	    }
	    
		List<BookingFurniture> list = new ArrayList<>();
		for(Integer key: map.keySet())
		{
			BookingFurniture bf = new BookingFurniture();
			Furniture f = new Furniture();
			f.setFurnitureId(key);
			bf.setFurniture(f);
			bf.setCount(map.get(key));
			
			list.add(bf);
		}
		return list;
		
	}
	
}
