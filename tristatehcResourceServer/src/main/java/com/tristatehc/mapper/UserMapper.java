package com.tristatehc.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import com.tristatehc.dto.AvailabilityDTO;
import com.tristatehc.dto.CellPhoneProviderDTO;
import com.tristatehc.dto.CustomerDTO;
import com.tristatehc.dto.CustomerShiftConfigurationDTO;
import com.tristatehc.dto.EventDTO;
import com.tristatehc.dto.JobseekerDTO;
import com.tristatehc.dto.StateDTO;
import com.tristatehc.dto.StatusDTO;
import com.tristatehc.dto.TitlesDTO;
import com.tristatehc.dto.UserDTO;
import com.tristatehc.dto.UserProfileDTO;
import com.tristatehc.dto.ZipcodeDTO;
import com.tristatehc.entity.Availability;
import com.tristatehc.entity.CellPhoneProvider;
import com.tristatehc.entity.Customer;
import com.tristatehc.entity.CustomerShiftConfiguration;
import com.tristatehc.entity.Event;
import com.tristatehc.entity.Jobseeker;
import com.tristatehc.entity.State;
import com.tristatehc.entity.Status;
import com.tristatehc.entity.Titles;
import com.tristatehc.entity.User;
import com.tristatehc.entity.UserProfile;
import com.tristatehc.entity.Zipcode;

@Mapper
public interface UserMapper {

	UserMapper INSTANCE = Mappers.getMapper( UserMapper.class );
	 
    
    UserDTO userToUserDto(User user); 
    
    UserProfileDTO userProfileToUserProfileDto(UserProfile userProfile);
    EventDTO eventToEventDto(Event event);

    CustomerDTO customerToCustomerDto(Customer customer);
    
    Customer customerDtoToCustomer(CustomerDTO customerDto);
    
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
    
     
    JobseekerDTO jobseekersToJobseekersDto(Jobseeker jobseeker);
    
    Jobseeker jobseekerDtoToJobseeker(JobseekerDTO jobseekerDto);
    
    
    @Mappings({@Mapping(target="clientId" , source="custShiftConfig.configId.clientId"),
    	@Mapping(target="seqLabel", source="custShiftConfig.configId.seqLabel")
    })
    CustomerShiftConfigurationDTO custShiftConfigToCustShiftConfigDto(CustomerShiftConfiguration custShiftConfig);
    
    @Mappings({@Mapping(target="configId.clientId" , source="clientId"),
    	@Mapping(target="configId.seqLabel", source="seqLabel")
    })
    CustomerShiftConfiguration custShiftConfigDtoToCustShiftConfig(CustomerShiftConfigurationDTO custShiftConfigDto);
    
    TitlesDTO titlesToTitlesDto(Titles title);
    
    ZipcodeDTO zipcodeToZipcodeDto(Zipcode zipcode);
    
    CellPhoneProviderDTO providerToproviderDto(CellPhoneProvider provider);
    
    StateDTO stateToStateDto(State state);
    
    StatusDTO statusToStatusDto(Status status);
     
}
