package edu.tamu.istm631.team17.models;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class BookingFurniture implements Serializable {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer bookingFurnitureId;
	
	
	
    @ManyToOne
    @JoinColumn
    private Booking booking;

	
    @ManyToOne
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
