package com.tristatehc.service;

import java.util.Optional;

import com.tristatehc.dto.UserDTO;


public interface UserService {
	public Optional<UserDTO> getUser(String emailId);

}
