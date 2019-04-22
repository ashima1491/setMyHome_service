package edu.tamu.istm631.team17.models;

import java.io.Serializable;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * 
 * This class represents the associative entity between
 * a furniture and booking. A single booking can have multiple furniture booked.
 * For eg, a donor can donate a couch, coffee table, chair in one booking.
 * And a furniture item can be donated by multiple donors.
 * For eg, two donors John and Jane may be donating cabinets.
 * 
 * So, BookingFurniture uniquely identifies a booked furniture by
 * referring to the bookingId of booking and furnitureId of furniture.
 * 
 * count stores the quantity of that furniture to be donated/picked up
 * in that booking
 *
 */
@Entity
public class BookingFurniture implements Serializable {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer bookingFurnitureId;
	
    @ManyToOne (fetch=FetchType.EAGER)
    @JoinColumn
    private Booking booking;

	
    @ManyToOne (fetch=FetchType.EAGER)
    @JoinColumn
    private Furniture furniture;

    private Integer count;
    
    public BookingFurniture(Furniture furniture, Integer count) {
		super();
		
		this.furniture = furniture;
		this.count = count;
	}

    public BookingFurniture() {
		super();
		
	}

	public Integer getBookingFurnitureId() {
		return bookingFurnitureId;
	}

	public void setBookingFurnitureId(Integer bookingFurnitureId) {
		this.bookingFurnitureId = bookingFurnitureId;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	
	public Furniture getFurniture() {
		return furniture;
	}

	public void setFurniture(Furniture furniture) {
		this.furniture = furniture;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}
	
}
