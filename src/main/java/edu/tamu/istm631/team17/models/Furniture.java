package edu.tamu.istm631.team17.models;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 
 * This class serves as a data model
 * (data structure) to store a furniture item.
 * It has furniture category which can be 'Heavy', 'Medium', 'Small',
 * furniture name and default count of 0.
 *
 */

@Entity
public class Furniture {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer furnitureId;
	private String category;
	private String furnitureName;
	private Integer count;
	
	@OneToMany(mappedBy = "furniture", cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	@JsonIgnore
    private Set<BookingFurniture> bookedFurniture= new HashSet<>();

	
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Integer getFurnitureId() {
		return furnitureId;
	}
	public Set<BookingFurniture> getBookedFurniture() {
		return bookedFurniture;
	}
	public void setBookedFurniture(Set<BookingFurniture> bookedFurniture) {
		this.bookedFurniture = bookedFurniture;
	}
	public void setFurnitureId(Integer furnitureId) {
		this.furnitureId = furnitureId;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getFurnitureName() {
		return furnitureName;
	}
	public void setFurnitureName(String furnitureName) {
		this.furnitureName = furnitureName;
	}

	
	
}
