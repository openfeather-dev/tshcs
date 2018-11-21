package com.tristatehc.dto;

public class CustomerShiftConfigurationDTO {

	private String clientId;
	private int shiftSequence;
	private String seqLabel;
	private String shiftTime;
	public String getClientId() {
		return clientId;
	}
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}
	public int getShiftSequence() {
		return shiftSequence;
	}
	public void setShiftSequence(int shiftSequence) {
		this.shiftSequence = shiftSequence;
	}
	public String getSeqLabel() {
		return seqLabel;
	}
	public void setSeqLabel(String seqLabel) {
		this.seqLabel = seqLabel;
	}
	public String getshiftTime() {
		return shiftTime;
	}
	public void setshiftTime(String shiftTime) {
		this.shiftTime = shiftTime;
	}
	@Override
	public String toString() {
		return "CustomerShiftConfigurationDTO [clientId=" + clientId + ", shiftSequence=" + shiftSequence
				+ ", seqLabel=" + seqLabel + ", shiftTime=" + shiftTime + "]";
	}
	
	
}
