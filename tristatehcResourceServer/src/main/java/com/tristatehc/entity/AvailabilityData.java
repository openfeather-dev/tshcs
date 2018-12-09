package com.tristatehc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureParameter;
import javax.persistence.Table;
import org.hibernate.annotations.Immutable;

@Entity
@Table(name = "UserAvailability")
@NamedStoredProcedureQueries({
   @NamedStoredProcedureQuery(name = "getAvailabilityData", 
                              procedureName = "get_user_availabilty_or_search",
                              resultClasses = { AvailabilityData.class },
                              parameters = {
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_email", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_zip", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_faclity_nm", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_miles", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_start_dt", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_end_dt", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_title", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_7_3", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_3_11", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_11_7", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_other_tm", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_elim_booked", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_elim_pending", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_elim_banned", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_elim_not_been", type = String.class)
                              })
})
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
	
	@Override
	public String toString() {
		return "AvailabilityData [empId=" + empId + ", fut1=" + fut1 + ", fut2=" + fut2 + ", title=" + title
				+ ", fname=" + fname + ", lname=" + lname + ", cell=" + cell + ", c0=" + c0 + ", c1=" + c1 + ", c2="
				+ c2 + ", c3=" + c3 + ", c4=" + c4 + ", c5=" + c5 + ", c6=" + c6 + ", c7=" + c7 + "]";
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	public void setFut1(String fut1) {
		this.fut1 = fut1;
	}
	public void setFut2(String fut2) {
		this.fut2 = fut2;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public void setCell(String cell) {
		this.cell = cell;
	}
	public void setC0(String c0) {
		this.c0 = c0;
	}
	public void setC1(String c1) {
		this.c1 = c1;
	}
	public void setC2(String c2) {
		this.c2 = c2;
	}
	public void setC3(String c3) {
		this.c3 = c3;
	}
	public void setC4(String c4) {
		this.c4 = c4;
	}
	public void setC5(String c5) {
		this.c5 = c5;
	}
	public void setC6(String c6) {
		this.c6 = c6;
	}
	public void setC7(String c7) {
		this.c7 = c7;
	}
	
		
}
