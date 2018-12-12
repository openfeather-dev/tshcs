package com.tristatehc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.ZipcodeDTO;

@Service
public interface ZipcodeService {
	
	public List<ZipcodeDTO> getZipcodes(String query);

}
