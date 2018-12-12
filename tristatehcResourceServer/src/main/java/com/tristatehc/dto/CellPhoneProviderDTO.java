package com.tristatehc.dto;

public class CellPhoneProviderDTO {
	private int providerId;
	private String providerCode;
	private String providerName;
	private String msgType;
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
