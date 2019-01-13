package com.tristatehc.dto;

public class AssignShiftsReqDTO {
	
	private String customer;
	private String email;
	private String shiftDate;
	private String fromSearchDate;
	private String toSearchDate; 
	private String searchFuture1;
	private String searchFuture2;
	private String searchFuture3;
	private String searchFuture4;
	private String searchFuture5;
	private String searchFuture6;
	private String searchFutureList;
	
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getShiftDate() {
		return shiftDate;
	}
	public void setShiftDate(String shiftDate) {
		this.shiftDate = shiftDate;
	}
	public String getFromSearchDate() {
		return fromSearchDate;
	}
	public void setFromSearchDate(String fromSearchDate) {
		this.fromSearchDate = fromSearchDate;
	}
	public String getToSearchDate() {
		return toSearchDate;
	}
	public void setToSearchDate(String toSearchDate) {
		this.toSearchDate = toSearchDate;
	}
	public String getSearchFuture1() {
		return searchFuture1;
	}
	public void setSearchFuture1(String searchFuture1) {
		this.searchFuture1 = searchFuture1;
	}
	public String getSearchFuture2() {
		return searchFuture2;
	}
	public void setSearchFuture2(String searchFuture2) {
		this.searchFuture2 = searchFuture2;
	}
	public String getSearchFuture3() {
		return searchFuture3;
	}
	public void setSearchFuture3(String searchFuture3) {
		this.searchFuture3 = searchFuture3;
	}
	public String getSearchFuture4() {
		return searchFuture4;
	}
	public void setSearchFuture4(String searchFuture4) {
		this.searchFuture4 = searchFuture4;
	}
	public String getSearchFuture5() {
		return searchFuture5;
	}
	public void setSearchFuture5(String searchFuture5) {
		this.searchFuture5 = searchFuture5;
	}
	public String getSearchFuture6() {
		return searchFuture6;
	}
	public void setSearchFuture6(String searchFuture6) {
		this.searchFuture6 = searchFuture6;
	}
	public String getSearchFutureList() {
		return searchFutureList;
	}
	public void setSearchFutureList(String searchFutureList) {
		this.searchFutureList = searchFutureList;
	}
	@Override
	public String toString() {
		return "AssignShiftsReqDTO [" + (customer != null ? "customer=" + customer + ", " : "")
				+ (email != null ? "email=" + email + ", " : "")
				+ (shiftDate != null ? "shiftDate=" + shiftDate + ", " : "")
				+ (fromSearchDate != null ? "fromSearchDate=" + fromSearchDate + ", " : "")
				+ (toSearchDate != null ? "toSearchDate=" + toSearchDate + ", " : "")
				+ (searchFuture1 != null ? "searchFuture1=" + searchFuture1 + ", " : "")
				+ (searchFuture2 != null ? "searchFuture2=" + searchFuture2 + ", " : "")
				+ (searchFuture3 != null ? "searchFuture3=" + searchFuture3 + ", " : "")
				+ (searchFuture4 != null ? "searchFuture4=" + searchFuture4 + ", " : "")
				+ (searchFuture5 != null ? "searchFuture5=" + searchFuture5 + ", " : "")
				+ (searchFuture6 != null ? "searchFuture6=" + searchFuture6 + ", " : "")
				+ (searchFutureList != null ? "searchFutureList=" + searchFutureList : "") + "]";
	}

}
