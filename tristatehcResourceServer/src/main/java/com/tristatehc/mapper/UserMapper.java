package com.tristatehc.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.tristatehc.dto.EventDTO;
import com.tristatehc.dto.UserDTO;
import com.tristatehc.dto.UserProfileDTO;
import com.tristatehc.entity.Event;
import com.tristatehc.entity.User;
import com.tristatehc.entity.UserProfile;

@Mapper
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );
	 
    
    UserDTO userToUserDto(User user); 
    
    UserProfileDTO userToUserProfileDto(UserProfile userProfiile); 
    
    EventDTO eventToEventDto(Event event);
}
