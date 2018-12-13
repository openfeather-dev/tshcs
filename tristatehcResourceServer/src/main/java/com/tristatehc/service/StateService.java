package com.tristatehc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.StateDTO;

@Service
public interface StateService {
	
	List<StateDTO> getAllStates();

}
