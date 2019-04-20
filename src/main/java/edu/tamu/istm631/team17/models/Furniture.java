package edu.tamu.istm631.team17.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Furniture {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer furnitureId;
	
	private String category;
	private String furnitureName;
	public Integer getFurnitureId() {
		return furnitureId;
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
