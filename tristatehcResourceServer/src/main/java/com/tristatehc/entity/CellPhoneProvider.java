package com.tristatehc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cell_provider")
public class CellPhoneProvider {
	
	@Id
	@Column(name="provider_id")
	private int providerId;
	
	@Column(name="provider_code")
	private String providerCode;
	
	@Column(name="provider_name")
	private String providerName;
	
	@Column(name="mesg_type")
	private String msgType;
	
	@Column(name="email_ext")
	private String emailExt;

	public int getProviderId() {
		return providerId;
	}

	public void setProviderId(int providerId) {
		this.providerId = providerId;
	}

	public String getProviderCode() {
		return providerCode;
	}

	public void setProviderCode(String providerCode) {
		this.providerCode = providerCode;
	}

	public String getProviderName() {
		return providerName;
	}

	public void setProviderName(String providerName) {
		this.providerName = providerName;
	}

	public String getEmailExt() {
		return emailExt;
	}

	public void setEmailExt(String emailExt) {
		this.emailExt = emailExt;
	}

	public String getMsgType() {
		return msgType;
	}

	public void setMsgType(String msgType) {
		this.msgType = msgType;
	}

	
}
