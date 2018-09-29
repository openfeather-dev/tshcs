package com.tristatehc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.Immutable;

@Entity
@Immutable
@Table(name="avail_data_vw")

public class AvailabilityData {
	
	@Id
	@Column(name="Emp ID")

	private String empId;
	
	@Column(name="Future 1")
	private String fut1;
	
	@Column(name="Future 2")
	private String fut2;
	
	@Column(name="TItle")
	private String title;
	
	@Column(name="F Name")
	private String fname;
	
	@Column(name="L Name")
	private String lname;
	
	@Column(name="Cell")
	private String cell;
	
	private String c0;
	private String c1;
	private String c2;
	private String c3;
	private String c4;
	private String c5;
	private String c6;
	private String c7;
	public String getEmpId() {
		return empId;
	}
	public String getFut1() {
		return fut1;
	}
	public String getFut2() {
		return fut2;
	}
	public String getTitle() {
		return title;
	}
	public String getFname() {
		return fname;
	}
	public String getLname() {
		return lname;
	}
	public String getCell() {
		return cell;
	}
	public String getC0() {
		return c0;
	}
	public String getC1() {
		return c1;
	}
	public String getC2() {
		return c2;
	}
	public String getC3() {
		return c3;
	}
	public String getC4() {
		return c4;
	}
	public String getC5() {
		return c5;
	}
	public String getC6() {
		return c6;
	}
	public String getC7() {
		return c7;
	}
		
		
}
