package com.tristatehc.entity;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="CTS_USER_PROFILE")
public class UserProfile implements Serializable{

	/**
	 * USERID                                    NOT NULL VARCHAR2(10)
 FNAME                                              VARCHAR2(30)
 LNAME                                              VARCHAR2(30)
 PHONE1                                             VARCHAR2(15)
 PHONE2                                             VARCHAR2(15)
 EMAIL_ID_MAIN                             NOT NULL VARCHAR2(100)
 EMAIL_ID_OTHER                                     VARCHAR2(100)
 EMP_ID 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="USERID")
	private String userId;
	private String fname;
	private String lname;
	private String phone1;
	private String phone2;
	private String emailIdMain;
	private String emailIdOther;
	private String empId;
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
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
	public String getPhone1() {
		return phone1;
	}
	public void setPhone1(String phone1) {
		this.phone1 = phone1;
	}
	public String getPhone2() {
		return phone2;
	}
	public void setPhone2(String phone2) {
		this.phone2 = phone2;
	}
	public String getEmailIdMain() {
		return emailIdMain;
	}
	public void setEmailIdMain(String emailIdMain) {
		this.emailIdMain = emailIdMain;
	}
	public String getEmailIdOther() {
		return emailIdOther;
	}
	public void setEmailIdOther(String emailIdOther) {
		this.emailIdOther = emailIdOther;
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	
	
}
