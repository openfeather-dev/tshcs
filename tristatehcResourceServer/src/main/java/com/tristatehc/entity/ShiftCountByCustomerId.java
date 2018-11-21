package com.tristatehc.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ShiftCountByCustomerId implements Serializable{

	
	@Column(name = "custid")
	String custId;
	
	@Column(name = "shift_tm_mt")
	String shiftTmMt;
	
	@Column(name = "shift_title_code")
	String shiftTitleCode;
	
	@Column(name = "shift_dt")
	String shiftDt;
	
	public String getCustId() {
		return custId;
	}
	public void setCustId(String custId) {
		this.custId = custId;
	}
	public String getShiftTmMt() {
		return shiftTmMt;
	}
	public void setShiftTmMt(String shiftTmMt) {
		this.shiftTmMt = shiftTmMt;
	}
	public String getShiftTitleCode() {
		return shiftTitleCode;
	}
	public void setShiftTitleCode(String shiftTitleCode) {
		this.shiftTitleCode = shiftTitleCode;
	}
	public String getShiftDt() {
		return shiftDt;
	}
	public void setShiftDt(String shiftDt) {
		this.shiftDt = shiftDt;
	}
	@Override
	public String toString() {
		return "ShiftCountByCustomerId [custId=" + custId + ", shiftTmMt=" + shiftTmMt + ", shiftTitleCode="
				+ shiftTitleCode + ", shiftDt=" + shiftDt + "]";
	}
	
}
