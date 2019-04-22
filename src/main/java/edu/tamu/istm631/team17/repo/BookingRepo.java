package edu.tamu.istm631.team17.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.tamu.istm631.team17.models.Booking;
import edu.tamu.istm631.team17.models.Person;

/*
 * Class for database Create, Read, Delete, Update Operations 
 * for Booking Entity
 */
public interface BookingRepo  extends CrudRepository<Booking, Integer>

{

	 @Query(" SELECT b FROM Booking b order by bookingId desc, timeSlot ")
	  public List<Booking> fetchAll();
	 
	 public List<Booking> findByperson(Person person);
	 
	 
}
