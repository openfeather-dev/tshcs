package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.StatusRepository;
import com.tristatehc.dto.StatusDTO;
import com.tristatehc.entity.Status;
import com.tristatehc.mapper.UserMapper;

@Service
public class StatusServiceImpl implements StatusService {
	
	@Autowired
	StatusRepository repository;

	@Override
	public List<StatusDTO> getAllStatus() {
		List<Status> statuses =  repository.findAll();
		List<StatusDTO> statusDto = new ArrayList<>();
		if(!statuses.isEmpty()) {
			statusDto = statuses.stream().map(status -> UserMapper.INSTANCE.statusToStatusDto(status)).collect(Collectors.toList());
		}
		return statusDto;
	}

	@Override
	public Optional<StatusDTO> getStatus(String status) {
		Optional<Status> statusOptional = repository.findByStatus(status);
		if(statusOptional.isPresent()) {
			Status statusType = statusOptional.get();
			return Optional.of(UserMapper.INSTANCE.statusToStatusDto(statusType));
		}
		return Optional.empty();
	}

}
