package com.tristatehc.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.UserDTO;

@Service
public interface UserService {
	public Optional<UserDTO> getUser(String emailId);

}
