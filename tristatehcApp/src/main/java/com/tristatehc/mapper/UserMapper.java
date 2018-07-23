package com.tristatehc.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.tristatehc.dto.UserDTO;
import com.tristatehc.entity.User;

@Mapper
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );
	 
    
    UserDTO userToUserDto(User user); 
}
