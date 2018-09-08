package com.tristatehc.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="thc_user_profile")
public class UserProfile implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="email_primary")
	private String emailPrimary;
	
	@Column(name="userid")
	private String userId;
	
	@Column(name="empid")
	private String empId;
	
	@Column(name="employment_status")
	private String employment_status;
	
	@Column(name="fname")
	private String fname;
	
	@Column(name="lname")
	private String lname;
	
	@Column(name="mname")
	private String mname;
	
	@Column(name="phone_cell")
	private String phoneCell;
	
	@Column(name="phone_cell2")
	private String phoneCell2;
	
	@Column(name="phone_home")
	private String phoneHome;
	
	@Column(name="phone_backup")
	private String phoneBackup;
	
	
	
	@Column(name="email_secondary")
	private String emailSecondary;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getEmployment_status() {
		return employment_status;
	}

	public void setEmployment_status(String employment_status) {
		this.employment_status = employment_status;
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

	public String getEmailPrimary() {
		return emailPrimary;
	}

	public void setEmailPrimary(String emailPrimary) {
		this.emailPrimary = emailPrimary;
	}

	public String getEmailSecondary() {
		return emailSecondary;
	}

	public void setEmailSecondary(String emailSecondary) {
		this.emailSecondary = emailSecondary;
	}
	
	
}
