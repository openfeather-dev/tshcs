package com.tristatehc.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.TitlesDTO;

@Service
public interface CustAddShiftService {
	List<TitlesDTO> getTitles(String state);
	Map<String, String> getShifts(String date, String customerId);
}
