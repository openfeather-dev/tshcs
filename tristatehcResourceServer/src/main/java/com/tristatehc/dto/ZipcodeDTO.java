package com.tristatehc.dto;

public class ZipcodeDTO {
private double zipCode;
	
	private String cityName;
	
	private String state;
	
	private double population;
	
	private double longitude;
	
	private double latitude;

	public double getZipCode() {
		return zipCode;
	}

	public void setZipCode(double zipCode) {
		this.zipCode = zipCode;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public double getPopulation() {
		return population;
	}

	public void setPopulation(double population) {
		this.population = population;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	

}
