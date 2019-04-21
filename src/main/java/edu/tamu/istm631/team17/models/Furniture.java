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


@Entity
@JsonIgnoreProperties(ignoreUnknown = true)

public class Furniture {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer furnitureId;
	
	private String category;
	private String furnitureName;
	private Integer count;
	
	@OneToMany(mappedBy = "furniture", cascade = CascadeType.ALL)
	@JsonIgnore
    private Set<BookingFurniture> bookedFurniture= new HashSet<>();

//	@Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof Furniture)) return false;
//        Furniture that = (Furniture) o;
//        return furnitureId.equals(that.getFurnitureId());
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(furnitureId);
//    }
	
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
