package com.tristatehc.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class AvailabilityId implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name="empid")
	private String empId;
	
	@Column(name="avail_dt")
	private String availDate;
	
	@Column(name="avail_tm")
	private String availTime;

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getAvailDate() {
		return availDate;
	}

	public void setAvailDate(String availDate) {
		this.availDate = availDate;
	}

	public String getAvailTime() {
		return availTime;
	}

	public void setAvailTime(String availTime) {
		this.availTime = availTime;
	}

	@Override
	public String toString() {
		return "AvailabilityId [empId=" + empId + ", availDate=" + availDate + ", availTime=" + availTime + "]";
	}
	
}
