package edu.tamu.istm631.team17.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * 
 * This class serves as model(data structure) for booking related activity
 * A booking is for an event, done by a person for a specific time slot.
 * It also has an associated list of furniture that is dropped in case of donor, or
 * picked up in case of student
 */

@Entity
public class Booking {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer bookingId;
	
	@OneToOne
	private Event event;
	
	@OneToOne
	private Person person;
	
	@OneToMany(fetch=FetchType.EAGER, mappedBy = "booking", cascade = CascadeType.ALL )
	@JsonIgnore
    private Set<BookingFurniture> bookedFurniture=new HashSet<>();

	
	private String timeSlot;
	
	public Integer getBookingId() {
		return bookingId;
	}

	public void setBookingId(Integer bookingId) {
		this.bookingId = bookingId;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}


	public Set<BookingFurniture> getBookedFurniture() {
		return bookedFurniture;
	}

	public void setBookedFurniture(Set<BookingFurniture> bookedFurniture) {
		this.bookedFurniture = bookedFurniture;
	}

	public String getTimeSlot() {
		return timeSlot;
	}

	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}

	

}
