package com.tristatehc.dto;

import java.sql.Date;

import javax.persistence.Column;

public class CustomerDTO {
private String facilityName;
	
	private String day;
	private String lastName;
	private String facAddr1;
	private String facAddr2;
	private String facCity;
	private String facState;
	private String facZip;
	private String contact1;
	private String contact2;
	private String donName;
	private String adminName;
	private String billingPerson;
	private String faxNo;
	private String donEmail;
	private String comments;
	private String contractInfile;
	private String onboarded;
	private String cnaRate;
	private String lpnRate;
	private String rnRate;
	private String hhaRate;
	private String shiftHours;
	private String enteredBy;
	private Date when;

	public String getFacilityName() {
		return facilityName;
	}

	public void setFacilityName(String facilityName) {
		this.facilityName = facilityName;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFacAddr1() {
		return facAddr1;
	}

	public void setFacAddr1(String facAddr1) {
		this.facAddr1 = facAddr1;
	}

	public String getFacAddr2() {
		return facAddr2;
	}

	public void setFacAddr2(String facAddr2) {
		this.facAddr2 = facAddr2;
	}

	public String getFacCity() {
		return facCity;
	}

	public void setFacCity(String facCity) {
		this.facCity = facCity;
	}

	public String getFacState() {
		return facState;
	}

	public void setFacState(String facState) {
		this.facState = facState;
	}

	public String getFacZip() {
		return facZip;
	}

	public void setFacZip(String facZip) {
		this.facZip = facZip;
	}

	public String getContact1() {
		return contact1;
	}

	public void setContact1(String contact1) {
		this.contact1 = contact1;
	}

	public String getContact2() {
		return contact2;
	}

	public void setContact2(String contact2) {
		this.contact2 = contact2;
	}

	public String getDonName() {
		return donName;
	}

	public void setDonName(String donName) {
		this.donName = donName;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getBillingPerson() {
		return billingPerson;
	}

	public void setBillingPerson(String billingPerson) {
		this.billingPerson = billingPerson;
	}

	public String getFaxNo() {
		return faxNo;
	}

	public void setFaxNo(String faxNo) {
		this.faxNo = faxNo;
	}

	public String getDonEmail() {
		return donEmail;
	}

	public void setDonEmail(String donEmail) {
		this.donEmail = donEmail;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getContractInfile() {
		return contractInfile;
	}

	public void setContractInfile(String contractInfile) {
		this.contractInfile = contractInfile;
	}

	public String getOnboarded() {
		return onboarded;
	}

	public void setOnboarded(String onboarded) {
		this.onboarded = onboarded;
	}

	public String getCnaRate() {
		return cnaRate;
	}

	public void setCnaRate(String cnaRate) {
		this.cnaRate = cnaRate;
	}

	public String getLpnRate() {
		return lpnRate;
	}

	public void setLpnRate(String lpnRate) {
		this.lpnRate = lpnRate;
	}

	public String getRnRate() {
		return rnRate;
	}

	public void setRnRate(String rnRate) {
		this.rnRate = rnRate;
	}

	public String getHhaRate() {
		return hhaRate;
	}

	public void setHhaRate(String hhaRate) {
		this.hhaRate = hhaRate;
	}

	public String getShiftHours() {
		return shiftHours;
	}

	public void setShiftHours(String shiftHours) {
		this.shiftHours = shiftHours;
	}

	public String getEnteredBy() {
		return enteredBy;
	}

	public void setEnteredBy(String enteredBy) {
		this.enteredBy = enteredBy;
	}

	public Date getWhen() {
		return when;
	}

	public void setWhen(Date when) {
		this.when = when;
	}

}
