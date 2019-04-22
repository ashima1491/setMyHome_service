package edu.tamu.istm631.team17.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import edu.tamu.istm631.team17.models.Furniture;
import edu.tamu.istm631.team17.repo.FurnitureRepo;

/**
 * This class is a controller for forwarding requests for furniture
 *  related activity. 
 * 
 *
 */

@RestController    
@RequestMapping(path="/furniture") 
@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})
public class FurnitureController {

	@Autowired 
	private FurnitureRepo furnitureRepo;

	
	/**
	    * This method adds a new furniture into the database
	    *
	    *@return true if furniture added successfully
	    *  
	    */
	@PostMapping(path="/add") 
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public @ResponseBody String addNewFurniture (@RequestBody Furniture funrniture) {
		
		//System.out.println(funrniture.getCategory()+" hii ");
		furnitureRepo.save(funrniture);
		return "true";
	}
	
	
	/**
	    * This method retrieves list of furniture in a particular category 
	    * like 'Heavy', 'Medium', 'Small'
	    *
	    *@return list of furniture
	    *  
	    */
	
	@GetMapping(path="/getByCategory/{category}")
	@CrossOrigin(origins = {"https://setmyhome.herokuapp.com", "http://localhost:4200"})

	public @ResponseBody Iterable<Furniture> getByCategory(@PathVariable String category) {
		return furnitureRepo.findBycategory(category);
	}
	
	
}
