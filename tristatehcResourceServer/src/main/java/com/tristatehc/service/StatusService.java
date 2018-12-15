package com.tristatehc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.StatusDTO;

@Service
public interface StatusService {
	public List<StatusDTO> getAllStatus();
	public Optional<StatusDTO> getStatus(String status);
}
