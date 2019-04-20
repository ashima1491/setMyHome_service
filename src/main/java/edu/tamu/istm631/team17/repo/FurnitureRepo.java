package edu.tamu.istm631.team17.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import edu.tamu.istm631.team17.models.Furniture;

public interface FurnitureRepo extends CrudRepository<Furniture, Integer> 
{
	 List<Furniture> findBycategory(String category);
	
}
