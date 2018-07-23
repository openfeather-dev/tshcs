package com.tristatehc.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.tristatehc.dao.UserRepository;
import com.tristatehc.dto.UserDTO;
import com.tristatehc.entity.User;
import com.tristatehc.mapper.UserMapper;

public class UserServiceImpl implements UserService{

	@Autowired UserRepository userRepository;
	public Optional<UserDTO> getUser(String emailId){
		Optional<User> userOptnl =  userRepository.findById(emailId);
		if(userOptnl.isPresent()){
			User user = userOptnl.get();
			return Optional.of(UserMapper.INSTANCE.userToUserDto(user));
		}
		return Optional.empty();
		
	} 

}
