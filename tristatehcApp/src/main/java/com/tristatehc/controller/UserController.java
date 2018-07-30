package com.tristatehc.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.UserDTO;
import com.tristatehc.service.UserService;

@RestController(value="/user")
public class UserController {
	
	@Autowired  UserService userService;
	
	
	@RequestMapping(consumes={MediaType.APPLICATION_JSON_VALUE} ,method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public UserDTO getUser(@RequestBody UserDTO user) {
		Optional<UserDTO> userOptnl = userService.getUser(user.getMaiId());
		return userOptnl.get();
	}

}
