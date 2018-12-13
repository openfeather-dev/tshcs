package com.tristatehc.service;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface CustAddShiftService {
	Map<String, String> getShifts(String date, String customerId);
}
