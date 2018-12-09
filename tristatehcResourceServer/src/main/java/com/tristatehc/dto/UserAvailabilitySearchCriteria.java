package com.tristatehc.dto;

import java.util.List;

public class UserAvailabilitySearchCriteria {
	
	String loggedInUserEmail; 
    String zipcode; 
    String selectedFacility;
    String radius; 
    String shiftDateFrom;
    String shiftDateTo; 
    String selectedShift7To3 ;
    String selectedShift3To11 ;
    String selectedShift11To7 ;
    String selectedShiftOther ;
    String selectedTitle ; 
    String selectedEliminateBooked ;
    String selectedEliminateBanned ;
    String selectedEliminatePending ;
    String selectedEliminateNotBeen ;
	public String getLoggedInUserEmail() {
		return loggedInUserEmail;
	}
	public void setLoggedInUserEmail(String loggedInUserEmail) {
		this.loggedInUserEmail = loggedInUserEmail;
	}
	public String getZipcode() {
		return zipcode;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	public String getSelectedFacility() {
		return selectedFacility;
	}
	public void setSelectedFacility(String selectedFacility) {
		this.selectedFacility = selectedFacility;
	}
	public String getRadius() {
		return radius;
	}
	public void setRadius(String radius) {
		this.radius = radius;
	}
	public String getShiftDateFrom() {
		return shiftDateFrom;
	}
	public void setShiftDateFrom(String shiftDateFrom) {
		this.shiftDateFrom = shiftDateFrom;
	}
	public String getShiftDateTo() {
		return shiftDateTo;
	}
	public void setShiftDateTo(String shiftDateTo) {
		this.shiftDateTo = shiftDateTo;
	}
	public String getSelectedShift7To3() {
		return selectedShift7To3;
	}
	public void setSelectedShift7To3(String selectedShift7To3) {
		this.selectedShift7To3 = selectedShift7To3;
	}
	public String getSelectedShift3To11() {
		return selectedShift3To11;
	}
	public void setSelectedShift3To11(String selectedShift3To11) {
		this.selectedShift3To11 = selectedShift3To11;
	}
	public String getSelectedShift11To7() {
		return selectedShift11To7;
	}
	public void setSelectedShift11To7(String selectedShift11To7) {
		this.selectedShift11To7 = selectedShift11To7;
	}
	public String getSelectedShiftOther() {
		return selectedShiftOther;
	}
	public void setSelectedShiftOther(String selectedShiftOther) {
		this.selectedShiftOther = selectedShiftOther;
	}
	public String getSelectedTitle() {
		return selectedTitle;
	}
	public void setSelectedTitle(String selectedTitle) {
		this.selectedTitle = selectedTitle;
	}
	public String getSelectedEliminateBooked() {
		return selectedEliminateBooked;
	}
	public void setSelectedEliminateBooked(String selectedEliminateBooked) {
		this.selectedEliminateBooked = selectedEliminateBooked;
	}
	public String getSelectedEliminateBanned() {
		return selectedEliminateBanned;
	}
	public void setSelectedEliminateBanned(String selectedEliminateBanned) {
		this.selectedEliminateBanned = selectedEliminateBanned;
	}
	public String getSelectedEliminatePending() {
		return selectedEliminatePending;
	}
	public void setSelectedEliminatePending(String selectedEliminatePending) {
		this.selectedEliminatePending = selectedEliminatePending;
	}
	public String getSelectedEliminateNotBeen() {
		return selectedEliminateNotBeen;
	}
	public void setSelectedEliminateNotBeen(String selectedEliminateNotBeen) {
		this.selectedEliminateNotBeen = selectedEliminateNotBeen;
	}
	@Override
	public String toString() {
		return "UserAvailabilitySearchCriteria [loggedInUserEmail=" + loggedInUserEmail + ", zipcode=" + zipcode
				+ ", selectedFacility=" + selectedFacility + ", radius=" + radius + ", shiftDateFrom=" + shiftDateFrom
				+ ", shiftDateTo=" + shiftDateTo + ", selectedShift7To3=" + selectedShift7To3 + ", selectedShift3To11="
				+ selectedShift3To11 + ", selectedShift11To7=" + selectedShift11To7 + ", selectedShiftOther="
				+ selectedShiftOther + ", selectedTitle=" + selectedTitle + ", selectedEliminateBooked="
				+ selectedEliminateBooked + ", selectedEliminateBanned=" + selectedEliminateBanned
				+ ", selectedEliminatePending=" + selectedEliminatePending + ", selectedEliminateNotBeen="
				+ selectedEliminateNotBeen + "]";
	}
	
	
}
