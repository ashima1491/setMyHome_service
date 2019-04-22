package edu.tamu.istm631.team17.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
/**
 * 
 * This class serves as a model (data structure)
 * to represent GiveAway Event. It has GiveAway name, description
 * , event date and time slot
 *
 */

@Entity
public class Event {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer eventId;
	private String name;
	private String description;
	private String date;
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Integer getEventId() {
		return eventId;
	}
	public void setEventId(Integer eventId) {
		this.eventId = eventId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
