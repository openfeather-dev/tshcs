package com.tristatehc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="us_zip_codes")
public class Zipcode {
	
	@Id
	@Column(name="ZIP_CODE")
	private double zipCode;
	
	@Column(name="CITY_NAME")
	private String cityName;
	
	@Column(name="STATE")
	private String state;
	
	@Column(name="PAPULATION")
	private double population;
	
	@Column(name="LONGITUDE")
	private double longitude;
	
	@Column(name="LATITUDE")
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
