package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.StateRepository;
import com.tristatehc.dto.StateDTO;
import com.tristatehc.entity.State;
import com.tristatehc.mapper.UserMapper;

@Service
public class StateServiceImpl implements StateService {

	@Autowired
	StateRepository repository;
	
	public List<StateDTO> getAllStates() {
		List<State> states = new ArrayList<>();
		List<StateDTO>  statesDto = new ArrayList<>();
		states = repository.findAllByOrderByStateNameAsc();
		if(!states.isEmpty()) {
			statesDto = states.stream().map(state -> UserMapper.INSTANCE.stateToStateDto(state)).collect(Collectors.toList());
		}
		return statesDto;
	}

}
