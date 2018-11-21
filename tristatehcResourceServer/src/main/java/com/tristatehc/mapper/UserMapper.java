package com.tristatehc.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import com.tristatehc.dto.AvailabilityDTO;
import com.tristatehc.dto.CustomerDTO;
import com.tristatehc.dto.CustomerShiftConfigurationDTO;
import com.tristatehc.dto.EventDTO;
import com.tristatehc.dto.JobseekerDTO;
import com.tristatehc.dto.TitlesDTO;
import com.tristatehc.dto.UserAvailabilityDTO;
import com.tristatehc.dto.UserDTO;
import com.tristatehc.dto.UserProfileDTO;
import com.tristatehc.entity.Availability;
import com.tristatehc.entity.Customer;
import com.tristatehc.entity.CustomerShiftConfiguration;
import com.tristatehc.entity.Event;
import com.tristatehc.entity.Jobseeker;
import com.tristatehc.entity.Titles;
import com.tristatehc.entity.User;
import com.tristatehc.entity.UserAvailabilityProjection;
import com.tristatehc.entity.UserProfile;

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
    
    @Mappings({@Mapping(target="empId", source="projection.userProfile.empId"),
    	@Mapping(target="availDate", source="projection.availability.availabilityId.availDate"),
    	 @Mapping(target="availTime", source="projection.availability.availabilityId.availTime"),
    	 @Mapping(target="availShift", source="projection.availability.availShift"),
    	 @Mapping(target="availComments", source="projection.availability.availComments"),
    	 @Mapping(target="enterBySource", source="projection.availability.enterBySource"),
    	 @Mapping(target="enterTime", source="projection.availability.enterTime"),
    	@Mapping(target="emailPrimary", source="projection.userProfile.emailPrimary"),
    	@Mapping(target="employmentStatus", source="projection.userProfile.employmentStatus"),
    	@Mapping(target="fname", source="projection.userProfile.fname"),
    	@Mapping(target="lname", source="projection.userProfile.lname"),
    	@Mapping(target="mname", source="projection.userProfile.mname"),
    	@Mapping(target="phoneCell", source="projection.userProfile.phoneCell"),
    	@Mapping(target="phoneCell2", source="projection.userProfile.phoneCell2"),
    	@Mapping(target="phoneHome", source="projection.userProfile.phoneHome"),
    	@Mapping(target="phoneBackup", source="projection.userProfile.phoneBackup"),
    	@Mapping(target="emailSecondary", source="projection.userProfile.emailSecondary"),
    })
    UserAvailabilityDTO userAvailabilityProjectionToUserAvailabilityDto(UserAvailabilityProjection projection);
    
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
    
     
}
