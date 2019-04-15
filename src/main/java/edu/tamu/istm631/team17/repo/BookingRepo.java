package edu.tamu.istm631.team17.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.tamu.istm631.team17.models.Booking;

public interface BookingRepo  extends CrudRepository<Booking, Integer>

{

	 @Query(" SELECT b FROM Booking b order by bookingId, timeSlot ")
	  public List<Booking> fetchAll();
}
