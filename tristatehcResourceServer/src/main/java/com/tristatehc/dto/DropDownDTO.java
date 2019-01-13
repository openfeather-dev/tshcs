package com.tristatehc.dto;

public class DropDownDTO {
	private String label;
	private String value;
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	@Override
	public String toString() {
		return "DropDownDTO [" + (label != null ? "label=" + label + ", " : "")
				+ (value != null ? "value=" + value : "") + "]";
	}

}
