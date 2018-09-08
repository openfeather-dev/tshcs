package com.tristatehc.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import com.tristatehc.dto.AvailabilityDTO;
import com.tristatehc.dto.EventDTO;
import com.tristatehc.dto.UserDTO;
import com.tristatehc.dto.UserProfileDTO;
import com.tristatehc.entity.Availability;
import com.tristatehc.entity.Event;
import com.tristatehc.entity.User;
import com.tristatehc.entity.UserProfile;

@Mapper
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );
	 
    
    UserDTO userToUserDto(User user); 
    
    UserProfileDTO userToUserProfileDto(UserProfile userProfiile); 
    
    EventDTO eventToEventDto(Event event);
    
    @Mappings({@Mapping(target="availabilityId.empId", source="availabilityDto.empId"),
    		 @Mapping(target="availabilityId.availDate", source="availabilityDto.availDate"),
    		 @Mapping(target="availabilityId.availTime", source="availabilityDto.availTime")
    })
    Availability availabilityDtoToAvailability(AvailabilityDTO availabilityDto);
    
    @Mappings({@Mapping(target="empId", source="availability.availabilityId.empId"),
		  @Mapping(target="availDate", source="availability.availabilityId.availDate"),
		  @Mapping(target="availTime", source="availability.availabilityId.availTime")
})
    AvailabilityDTO availabilityToAvailabilityDto(Availability availability);
}
