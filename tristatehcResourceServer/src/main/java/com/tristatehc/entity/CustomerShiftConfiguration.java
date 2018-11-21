package com.tristatehc.entity;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="thc_client_shift_config")
public class CustomerShiftConfiguration {
	
	@EmbeddedId
	private CustomerShiftConfigurationId configId;
	
	@Column(name="shift_seq")
	private int shiftSequence;
	
	@Column(name="shift_time")
	private String shiftTime;

	public CustomerShiftConfigurationId getConfigId() {
		return configId;
	}

	public void setConfigId(CustomerShiftConfigurationId configId) {
		this.configId = configId;
	}

	public int getShiftSequence() {
		return shiftSequence;
	}

	public void setShiftSequence(int shiftSequence) {
		this.shiftSequence = shiftSequence;
	}

	public String getShiftTime() {
		return shiftTime;
	}

	public void setShiftTime(String shiftTime) {
		this.shiftTime = shiftTime;
	}
	
}
