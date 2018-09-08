package com.tristatehc.dto;

import java.sql.Date;

public class UserAvailabilityDTO {
	
	private String empId;
	private String availDate;
	private String availTime;
	private String availShift;
	private String availComments;
	private String enterBySource;
	private Date enterTime;
	private String emailPrimary;
	private String userId;
	private String employmentStatus;
	private String fname;
	private String lname;
	private String mname;
	private String phoneCell;
	private String phoneCell2;
	private String phoneHome;
	private String phoneBackup;
	private String emailSecondary;
	
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
	public String getEmailPrimary() {
		return emailPrimary;
	}
	public void setEmailPrimary(String emailPrimary) {
		this.emailPrimary = emailPrimary;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getEmploymentStatus() {
		return employmentStatus;
	}
	public void setEmploymentStatus(String employmentStatus) {
		this.employmentStatus = employmentStatus;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getPhoneCell() {
		return phoneCell;
	}
	public void setPhoneCell(String phoneCell) {
		this.phoneCell = phoneCell;
	}
	public String getPhoneCell2() {
		return phoneCell2;
	}
	public void setPhoneCell2(String phoneCell2) {
		this.phoneCell2 = phoneCell2;
	}
	public String getPhoneHome() {
		return phoneHome;
	}
	public void setPhoneHome(String phoneHome) {
		this.phoneHome = phoneHome;
	}
	public String getPhoneBackup() {
		return phoneBackup;
	}
	public void setPhoneBackup(String phoneBackup) {
		this.phoneBackup = phoneBackup;
	}
	public String getEmailSecondary() {
		return emailSecondary;
	}
	public void setEmailSecondary(String emailSecondary) {
		this.emailSecondary = emailSecondary;
	}
	@Override
	public String toString() {
		return "UserAvailabilityDTO [empId=" + empId + ", availDate=" + availDate + ", availTime=" + availTime
				+ ", availShift=" + availShift + ", availComments=" + availComments + ", enterBySource=" + enterBySource
				+ ", enterTime=" + enterTime + ", emailPrimary=" + emailPrimary + ", userId=" + userId
				+ ", employmentStatus=" + employmentStatus + ", fname=" + fname + ", lname=" + lname + ", mname="
				+ mname + ", phoneCell=" + phoneCell + ", phoneCell2=" + phoneCell2 + ", phoneHome=" + phoneHome
				+ ", phoneBackup=" + phoneBackup + ", emailSecondary=" + emailSecondary + "]";
	}

	
}
