package com.tristatehc.service;

import java.util.List;
import java.util.Optional;

import com.tristatehc.dto.UserDTO;
import com.tristatehc.dto.UserProfileDTO;


public interface UserService {
	public Optional<UserDTO> getUser(String emailId);
	public Optional<UserProfileDTO> getUserProfile(String emailId);
	public List<UserProfileDTO> getAllUserProfiles();

}
