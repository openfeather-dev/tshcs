package com.tristatehc.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="thc_job_application")
public class Jobseeker implements Serializable{
	
	@Id
	@Column(name="email")
	private String email;
	
	@Column(name="lname")
	private String lastName ;
	
	@Column(name="fname")
	private String firstName ;
	
	@Column(name="middle_initial")
	private String middleInitial;
	
	private String address;
	private String city;
	private String state;
	private String zip;
	private String ssn;
	private String unavailable;
	
	@Column(name="home_phone")
	private String homePhone;
	
	@Column(name="cell_phone")
	private String cellPhone;
	
	@Column(name="cell_phone_provider")
	private String cellPhoneProvider;
	
	@Column(name="adult")
	private String adult;
	
	@Column(name="emergency_contact")
	private String emergencyContact;
	
	@Column(name="emergency_phone")
	private String emergencyPhone;
	
	@Column(name="positions_applied")
	private String positions;
	
	@Column(name="hs_name")
	private String highSchoolName;
	
	@Column(name="hs_address")
	private String highSchoolAddress;
	
	@Column(name="hs_years")
	private int highSchoolYears;
	
	@Column(name="hs_degree_major")
	private String highSchoolDegree;
	
	@Column(name="college_name")
	private String collegeName;
	
	@Column(name="college_address")
	private String collegeAddress;
	
	@Column(name="college_years")
	private int collegeYears;
	
	@Column(name="college_degree_major")
	private String collegeDegree;
	
	@Column(name="ts_name")
	private String tradeName;
	
	@Column(name="ts_address")
	private String tradeAddress;
	
	@Column(name="ts_years")
	private int tradeYears;
	
	@Column(name="ts_degree_major")
	private String tradeDegree;
	
	@Column(name="gs_name")
	private String graduateName;
	
	@Column(name="gs_address")
	private String graduateAddress;
	
	@Column(name="gs_years")
	private int graduateYears;
	
	@Column(name="gs_degree_major")
	private String graduateDegree;
	
	@Column(name="ref_fst_name")
	private String refName1;
	
	@Column(name="ref_fst_position")
	private String refPosition1;
	
	@Column(name="ref_fst_facility_name")
	private String ref1FacilityName;
	
	@Column(name="ref_fst_address")
	private String refAddress1;
	
	@Column(name="ref_fst_phone")
	private String refPhone1;
	
	@Column(name="ref_sec_name")
	private String refName2;
	
	@Column(name="ref_sec_position")
	private String refPosition2;
	
	@Column(name="ref_sec_facility_name")
	private String ref2FacilityName;
	
	@Column(name="ref_sec_address")
	private String refAddress2;
	
	@Column(name="ref_sec_phone")
	private String refPhone2;
	
	@Column(name="bank_name")
	private String bankName ;
	
	@Column(name="bank_address")
	private String bankAddress;
	
	@Column(name="bank_city")
	private String bankCity;
	
	@Column(name="bank_state")
	private String bankState;
	
	@Column(name="bank_zip")
	private String bankZip;
	
	@Column(name="account_type")
	private String accountType;
	
	@Column(name="account_number")
	private String accountNumber;
	
	@Column(name="routing_number")
	private String routingNumber;
	
	@Column(name="id_number")
	private String id ;
	
	@Column(name="id_expiry")
	private String idExpiry;
	
	@Column(name="med_license_number")
	private String medLicenseNumber;
	
	@Column(name="med_license_state")
	private String licenseState;
	
	@Column(name="med_license_expiry")
	private String medLicenseExpiry;
	
	@Column(name="status")
	private String status;
	
	@Column(name="comments")
	private String comments;
	
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleInitial() {
		return middleInitial;
	}
	public void setMiddleInitial(String middleInitial) {
		this.middleInitial = middleInitial;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getHomePhone() {
		return homePhone;
	}
	public void setHomePhone(String homePhone) {
		this.homePhone = homePhone;
	}
	public String getCellPhone() {
		return cellPhone;
	}
	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
	}
	public String getEmergencyContact() {
		return emergencyContact;
	}
	public void setEmergencyContact(String emergencyContact) {
		this.emergencyContact = emergencyContact;
	}
	public String getEmergencyPhone() {
		return emergencyPhone;
	}
	public void setEmergencyPhone(String emergencyPhone) {
		this.emergencyPhone = emergencyPhone;
	}
	public String getPositions() {
		return positions;
	}
	public void setPositions(String positions) {
		this.positions = positions;
	}
	public String getUnavailable() {
		return unavailable;
	}
	public void setUnavailable(String unavailable) {
		this.unavailable = unavailable;
	}
	public String getHighSchoolName() {
		return highSchoolName;
	}
	public void setHighSchoolName(String highSchoolName) {
		this.highSchoolName = highSchoolName;
	}
	public String getHighSchoolAddress() {
		return highSchoolAddress;
	}
	public void setHighSchoolAddress(String highSchoolAddress) {
		this.highSchoolAddress = highSchoolAddress;
	}
	public int getHighSchoolYears() {
		return highSchoolYears;
	}
	public void setHighSchoolYears(int highSchoolYears) {
		this.highSchoolYears = highSchoolYears;
	}
	public String getHighSchoolDegree() {
		return highSchoolDegree;
	}
	public void setHighSchoolDegree(String highSchoolDegree) {
		this.highSchoolDegree = highSchoolDegree;
	}
	public String getCollegeName() {
		return collegeName;
	}
	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}
	public String getCollegeAddress() {
		return collegeAddress;
	}
	public void setCollegeAddress(String collegeAddress) {
		this.collegeAddress = collegeAddress;
	}
	public int getCollegeYears() {
		return collegeYears;
	}
	public void setCollegeYears(int collegeYears) {
		this.collegeYears = collegeYears;
	}
	public String getCollegeDegree() {
		return collegeDegree;
	}
	public void setCollegeDegree(String collegeDegree) {
		this.collegeDegree = collegeDegree;
	}
	public String getTradeName() {
		return tradeName;
	}
	public void setTradeName(String tradeName) {
		this.tradeName = tradeName;
	}
	public String getTradeAddress() {
		return tradeAddress;
	}
	public void setTradeAddress(String tradeAddress) {
		this.tradeAddress = tradeAddress;
	}
	public int getTradeYears() {
		return tradeYears;
	}
	public void setTradeYears(int tradeYears) {
		this.tradeYears = tradeYears;
	}
	public String getTradeDegree() {
		return tradeDegree;
	}
	public void setTradeDegree(String tradeDegree) {
		this.tradeDegree = tradeDegree;
	}
	public String getGraduateName() {
		return graduateName;
	}
	public void setGraduateName(String graduateName) {
		this.graduateName = graduateName;
	}
	public String getGraduateAddress() {
		return graduateAddress;
	}
	public void setGraduateAddress(String graduateAddress) {
		this.graduateAddress = graduateAddress;
	}
	public int getGraduateYears() {
		return graduateYears;
	}
	public void setGraduateYears(int graduateYears) {
		this.graduateYears = graduateYears;
	}
	public String getGraduateDegree() {
		return graduateDegree;
	}
	public void setGraduateDegree(String graduateDegree) {
		this.graduateDegree = graduateDegree;
	}
	public String getRefName1() {
		return refName1;
	}
	public void setRefName1(String refName1) {
		this.refName1 = refName1;
	}
	public String getRefPosition1() {
		return refPosition1;
	}
	public void setRefPosition1(String refPosition1) {
		this.refPosition1 = refPosition1;
	}
	public String getRefAddress1() {
		return refAddress1;
	}
	public void setRefAddress1(String refAddress1) {
		this.refAddress1 = refAddress1;
	}
	public String getRefPhone1() {
		return refPhone1;
	}
	public void setRefPhone1(String refPhone1) {
		this.refPhone1 = refPhone1;
	}
	public String getRefName2() {
		return refName2;
	}
	public void setRefName2(String refName2) {
		this.refName2 = refName2;
	}
	public String getRefPosition2() {
		return refPosition2;
	}
	public void setRefPosition2(String refPosition2) {
		this.refPosition2 = refPosition2;
	}
	public String getRefAddress2() {
		return refAddress2;
	}
	public void setRefAddress2(String refAddress2) {
		this.refAddress2 = refAddress2;
	}
	public String getRefPhone2() {
		return refPhone2;
	}
	public void setRefPhone2(String refPhone2) {
		this.refPhone2 = refPhone2;
	}
	
	public String getCellPhoneProvider() {
		return cellPhoneProvider;
	}
	public void setCellPhoneProvider(String cellPhoneProvider) {
		this.cellPhoneProvider = cellPhoneProvider;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getBankAddress() {
		return bankAddress;
	}
	public void setBankAddress(String bankAddress) {
		this.bankAddress = bankAddress;
	}
	public String getBankCity() {
		return bankCity;
	}
	public void setBankCity(String bankCity) {
		this.bankCity = bankCity;
	}
	public String getBankState() {
		return bankState;
	}
	public void setBankState(String bankState) {
		this.bankState = bankState;
	}
	public String getBankZip() {
		return bankZip;
	}
	public void setBankZip(String bankZip) {
		this.bankZip = bankZip;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getRoutingNumber() {
		return routingNumber;
	}
	public void setRoutingNumber(String routingNumber) {
		this.routingNumber = routingNumber;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIdExpiry() {
		return idExpiry;
	}
	public void setIdExpiry(String idExpiry) {
		this.idExpiry = idExpiry;
	}
	public String getMedLicenseNumber() {
		return medLicenseNumber;
	}
	public void setMedLicenseNumber(String medLicenseNumber) {
		this.medLicenseNumber = medLicenseNumber;
	}
	public String getLicenseState() {
		return licenseState;
	}
	public void setLicenseState(String licenseState) {
		this.licenseState = licenseState;
	}
	public String getMedLicenseExpiry() {
		return medLicenseExpiry;
	}
	public void setMedLicenseExpiry(String medLicenseExpiry) {
		this.medLicenseExpiry = medLicenseExpiry;
	}
	public String getAdult() {
		return adult;
	}
	public void setAdult(String adult) {
		this.adult = adult;
	}
	public String getRef1FacilityName() {
		return ref1FacilityName;
	}
	public void setRef1FacilityName(String ref1FacilityName) {
		this.ref1FacilityName = ref1FacilityName;
	}
	public String getRef2FacilityName() {
		return ref2FacilityName;
	}
	public void setRef2FacilityName(String ref2FacilityName) {
		this.ref2FacilityName = ref2FacilityName;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	@Override
	public String toString() {
		return "Jobseeker [email=" + email + ", lastName=" + lastName + ", firstName=" + firstName + ", middleInitial="
				+ middleInitial + ", address=" + address + ", city=" + city + ", state=" + state + ", zip=" + zip
				+ ", ssn=" + ssn + ", unavailable=" + unavailable + ", homePhone=" + homePhone + ", cellPhone="
				+ cellPhone + ", cellPhoneProvider=" + cellPhoneProvider + ", adult=" + adult + ", emergencyContact="
				+ emergencyContact + ", emergencyPhone=" + emergencyPhone + ", positions=" + positions
				+ ", highSchoolName=" + highSchoolName + ", highSchoolAddress=" + highSchoolAddress
				+ ", highSchoolYears=" + highSchoolYears + ", highSchoolDegree=" + highSchoolDegree + ", collegeName="
				+ collegeName + ", collegeAddress=" + collegeAddress + ", collegeYears=" + collegeYears
				+ ", collegeDegree=" + collegeDegree + ", tradeName=" + tradeName + ", tradeAddress=" + tradeAddress
				+ ", tradeYears=" + tradeYears + ", tradeDegree=" + tradeDegree + ", graduateName=" + graduateName
				+ ", graduateAddress=" + graduateAddress + ", graduateYears=" + graduateYears + ", graduateDegree="
				+ graduateDegree + ", refName1=" + refName1 + ", refPosition1=" + refPosition1 + ", ref1FacilityName="
				+ ref1FacilityName + ", refAddress1=" + refAddress1 + ", refPhone1=" + refPhone1 + ", refName2="
				+ refName2 + ", refPosition2=" + refPosition2 + ", ref2FacilityName=" + ref2FacilityName
				+ ", refAddress2=" + refAddress2 + ", refPhone2=" + refPhone2 + ", bankName=" + bankName
				+ ", bankAddress=" + bankAddress + ", bankCity=" + bankCity + ", bankState=" + bankState + ", bankZip="
				+ bankZip + ", accountType=" + accountType + ", accountNumber=" + accountNumber + ", routingNumber="
				+ routingNumber + ", id=" + id + ", idExpiry=" + idExpiry + ", medLicenseNumber=" + medLicenseNumber
				+ ", licenseState=" + licenseState + ", medLicenseExpiry=" + medLicenseExpiry + ", status=" + status
				+ ", comments=" + comments + "]";
	}
	
}
