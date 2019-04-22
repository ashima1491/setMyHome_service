package edu.tamu.istm631.team17.models;

import java.util.List;

/**
 * This class is used for providing input to booking related 
 * functions. It represents the eventId, personId, furniture list and timeslot 
 * captured from the user interface
 *
 */
public class BookingInput {

	private Integer bookingId;
	private Integer eventId;
	private Integer personId;
	private List<Furniture> furnitureList;
	private String timeSlot;

	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public Integer getEventId() {
		return eventId;
	}

	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}

	public Integer getPersonId() {
		return personId;
	}

	public void setPersonId(Integer personId) {
		this.personId = personId;
	}

	public List<Furniture> getFurnitureList() {
		return furnitureList;
	}

	public void setFurnitureList(List<Furniture> furnitureList) {
		this.furnitureList = furnitureList;
	}

	public String getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}

	

}
