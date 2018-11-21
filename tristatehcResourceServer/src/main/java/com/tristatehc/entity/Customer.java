package com.tristatehc.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cts_cus")
public class Customer {
	
	@Id
	@Column(name="FAC_NAME")
	private String facilityName;
	
	@Column(name="DAY")
	private String day;
	
	@Column(name="LAST_NAME")
	private String lastName;
	
	@Column(name="FAC_ADDR1")	
	private String facAddr1;
	
	@Column(name="FAC_ADDR2")	
	private String facAddr2;
	
	@Column(name="FAC_CITY")
	private String facCity;
	
	@Column(name="FAC_STATE")
	private String facState;
	
	@Column(name="FAC_ZIP")
	private String facZip;
	
	@Column(name="CONTACT1")
	private String contact1;
	
	@Column(name="CONTACT2")
	private String contact2;
	
	@Column(name="DON_NAME")
	private String donName;
	
	@Column(name="ADMIN_NAME")
	private String adminName;
	
	@Column(name="BILLING_PERSON")
	private String billingPerson;
	
	@Column(name="FAX_NO")
	private String faxNo;
	
	@Column(name="DON_EMAIL")
	private String donEmail;
	
	@Column(name="COMMENTS")
	private String comments;
	
	@Column(name="CONTRACT_INFILE")
	private String contractInfile;
	
	@Column(name="ONBOARDED")
	private String onboarded;
	
	@Column(name="CNA_RATE")
	private String cnaRate;
	
	@Column(name="LPN_RATE")
	private String lpnRate;
	
	@Column(name="RN_RATE")
	private String rnRate;
	
	@Column(name="HHA_RATE")
	private String hhaRate;
	
	@Column(name="SHIFT_HOURS")
	private String shiftHours;
	
	@Column(name="ENTEREDBY")
	private String enteredBy;
	
	@Column(name="WHEN")
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
