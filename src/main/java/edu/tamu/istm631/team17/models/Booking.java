package edu.tamu.istm631.team17.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer bookingId;
	
	private String eventName;
	
	private String userName;
	
	private String userType;
	private String heavyCategoryCount;
	private String mediumCategoryCount;
	private String lowCategoryCount;
	private String timeSlot;
	
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public Integer getBookingId() {
		return bookingId;
	}
	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}
	
	
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getHeavyCategoryCount() {
		return heavyCategoryCount;
	}
	public void setHeavyCategoryCount(String heavyCategoryCount) {
		this.heavyCategoryCount = heavyCategoryCount;
	}
	public String getMediumCategoryCount() {
		return mediumCategoryCount;
	}
	public void setMediumCategoryCount(String mediumCategoryCount) {
		this.mediumCategoryCount = mediumCategoryCount;
	}
	public String getLowCategoryCount() {
		return lowCategoryCount;
	}
	public void setLowCategoryCount(String lowCategoryCount) {
		this.lowCategoryCount = lowCategoryCount;
	}
	public String getTimeSlot() {
		return timeSlot;
	}
	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}
	



}
