package com.tristatehc.entity;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="thc_user_avail")
public class Availability implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private AvailabilityId availabilityId;
	
	@Column(name="avail_shift")
	private String availShift;
	
	@Column(name="avail_comments")
	private String availComments;
	
	@Column(name="enter_by_source")
	private String enterBySource;
	
	@Column(name="enter_time")
	private Date enterTime;

	
	public AvailabilityId getAvailabilityId() {
		return availabilityId;
	}

	public void setAvailabilityId(AvailabilityId availabilityId) {
		this.availabilityId = availabilityId;
	}

	public String getAvailShift() {
		return availShift;
	}

	public void setAvailShift(String availShift) {
		this.availShift = availShift;
	}

	public String getAvailComments() {
		return availComments;
	}

	public void setAvailComments(String availComments) {
		this.availComments = availComments;
	}

	public String getEnterBySource() {
		return enterBySource;
	}

	public void setEnterBySource(String enterBySource) {
		this.enterBySource = enterBySource;
	}

	public Date getEnterTime() {
		return enterTime;
	}

	public void setEnterTime(Date enterTime) {
		this.enterTime = enterTime;
	}

	@Override
	public String toString() {
		return "Availability [availabilityId=" + availabilityId + ", availShift=" + availShift + ", availComments="
				+ availComments + ", enterBySource=" + enterBySource + ", enterTime=" + enterTime + "]";
	}
	

}
	