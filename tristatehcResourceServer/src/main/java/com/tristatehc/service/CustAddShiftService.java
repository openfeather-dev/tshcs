package com.tristatehc.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.CustShiftDTO;

@Service
public interface CustAddShiftService {
	Map<String, String> getShifts(String date, String customerId);

	void saveShifts(CustShiftDTO shiftData);
}
