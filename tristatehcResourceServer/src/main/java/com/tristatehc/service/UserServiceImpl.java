package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.UserProfileRepository;
import com.tristatehc.dao.UserRepository;
import com.tristatehc.dto.UserDTO;
import com.tristatehc.dto.UserProfileDTO;
import com.tristatehc.entity.User;
import com.tristatehc.entity.UserProfile;
import com.tristatehc.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService{

	@Autowired UserRepository userRepository;
	@Autowired UserProfileRepository profileRepository;

	public Optional<UserDTO> getUser(String emailId){
		Optional<User> userOptnl =  userRepository.findById(emailId);
		if(userOptnl.isPresent()){
			User user = userOptnl.get();
			return Optional.of(UserMapper.INSTANCE.userToUserDto(user));
		}
		return Optional.empty();
		
	} 
	
	
	public Optional<UserProfileDTO> getUserProfile(String emailId){
		Optional<UserProfile> userOptnl =  profileRepository.findById(emailId);
		if(userOptnl.isPresent()){
			UserProfile userProfile = userOptnl.get();
			return Optional.of(UserMapper.INSTANCE.userProfileToUserProfileDto(userProfile));
		}
		return Optional.empty();
		
	}


	public List<UserProfileDTO> getAllUserProfiles() {
		List<UserProfile> users = profileRepository.findAllByOrderByFnameAsc();
		List<UserProfileDTO> usersDto = new ArrayList<>();
		if(!users.isEmpty()) {
			usersDto = users.stream().map(user -> UserMapper.INSTANCE.userProfileToUserProfileDto(user)).collect(Collectors.toList());
		}
		return usersDto;
	} 
	
	

}
