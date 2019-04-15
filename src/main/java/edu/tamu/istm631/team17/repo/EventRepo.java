package edu.tamu.istm631.team17.repo;

import org.springframework.data.repository.CrudRepository;

import edu.tamu.istm631.team17.models.Event;

public interface EventRepo extends CrudRepository<Event, Integer> {

}
