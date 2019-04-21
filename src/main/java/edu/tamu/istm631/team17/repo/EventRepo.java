package edu.tamu.istm631.team17.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import edu.tamu.istm631.team17.models.Booking;
import edu.tamu.istm631.team17.models.Event;

public interface EventRepo extends CrudRepository<Event, Integer> {
	
	@Query(" SELECT e FROM Event e order by eventId desc ")
	  public List<Event> fetchAll();

}
