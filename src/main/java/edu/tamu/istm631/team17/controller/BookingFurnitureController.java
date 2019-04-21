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

@RestController    
@RequestMapping(path="/bookedFurniture") 
//@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

public class BookingFurnitureController {

	
	@Autowired 
	private BookingFurnitureRepo bookingFurnitureRepo;
	
	

//	public HashMap<Integer, Integer> stock () {
//		
//		Iterable<BookingFurniture> bookedFurniture =bookingFurnitureRepo.findAll();
//		HashMap<Integer, Integer> map = new HashMap<>();
//		
//		for(BookingFurniture bf: bookedFurniture)
//		{
//			System.out.println(bf +"   "+bf.getBookingFurnitureId());
//			Integer key= bf.getFurniture().getFurnitureId();
//			String type= bf.getBooking().getPerson().getType();
//			Integer qty= bf.getCount();
//			System.out.println(key +" "+qty);
//			
//			if(map.containsKey(key))
//			{
//				if("donor".equals(type))
//				map.put(key, map.get(key)+qty);
//				
//				if("student".equals(type))
//				map.put(key, map.get(key)-qty);
//			}
//			else
//			{
//				    if("donor".equals(type))
//				    {
//				    	map.put(key, qty);
//				    	
//				    }
//					
//					
//					if("student".equals(type))
//					map.put(key, -qty);
//				
//			}
//		}
//		
//		return map;
//		
//	}
	
	@GetMapping(path="/stock") 
//	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})
        public List<BookingFurniture> stock () {
		
		Iterable<BookingFurniture> bookedFurniture =bookingFurnitureRepo.findAll();
		HashMap<Integer, Integer> map = new HashMap<>();
		
		for(BookingFurniture bf: bookedFurniture)
		{
			System.out.println(bf +"   "+bf.getBookingFurnitureId());
			Integer key= bf.getFurniture().getFurnitureId();
			String type= bf.getBooking().getPerson().getType();
			Integer qty= bf.getCount();
			System.out.println(key +" "+qty);
			
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
