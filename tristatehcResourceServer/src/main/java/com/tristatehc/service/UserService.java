package com.tristatehc.service;

import java.util.Optional;

import com.tristatehc.dto.UserDTO;
import com.tristatehc.entity.UserProfile;


public interface UserService {
	public Optional<UserDTO> getUser(String emailId);
	public Optional<UserProfile> getUserProfile(String emailId);

}
