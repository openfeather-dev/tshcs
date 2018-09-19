package com.tristatehc.dto;

import java.sql.Date;



public class AvailabilityDTO {
	
	private String empId;
	private String availDate;
	private String availTime;
	private String availShift;
	private String availComments;
	private String enterBySource;
	private Date enterTime;
	private String employeeName;
	
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
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((availComments == null) ? 0 : availComments.hashCode());
		result = prime * result + ((availDate == null) ? 0 : availDate.hashCode());
		result = prime * result + ((availShift == null) ? 0 : availShift.hashCode());
		result = prime * result + ((availTime == null) ? 0 : availTime.hashCode());
		result = prime * result + ((empId == null) ? 0 : empId.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AvailabilityDTO other = (AvailabilityDTO) obj;
		if (availComments == null) {
			if (other.availComments != null)
				return false;
		} else if (!availComments.equals(other.availComments))
			return false;
		if (availDate == null) {
			if (other.availDate != null)
				return false;
		} else if (!availDate.equals(other.availDate))
			return false;
		if (availShift == null) {
			if (other.availShift != null)
				return false;
		} else if (!availShift.equals(other.availShift))
			return false;
		if (availTime == null) {
			if (other.availTime != null)
				return false;
		} else if (!availTime.equals(other.availTime))
			return false;
		if (empId == null) {
			if (other.empId != null)
				return false;
		} else if (!empId.equals(other.empId))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "AvailabilityDTO [empId=" + empId + ", availDate=" + availDate + ", availTime=" + availTime
				+ ", availShift=" + availShift + ", availComments=" + availComments + ", enterBySource=" + enterBySource
				+ ", enterTime=" + enterTime + ", employeeName=" + employeeName + "]";
	}
	
}
