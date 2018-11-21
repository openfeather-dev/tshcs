package com.tristatehc.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class CustomerShiftConfigurationId implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name="clientid")
	private String clientId;
	
	@Column(name="seq_label")
	private String seqLabel;

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getSeqLabel() {
		return seqLabel;
	}

	public void setSeqLabel(String seqLabel) {
		this.seqLabel = seqLabel;
	}
	
}
