package com.tristatehc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.CustomerShiftConfigurationDTO;

@Service
public interface CustShiftConfigService {
	List<CustomerShiftConfigurationDTO> getCustShiftConfig(String clientId);
	List<CustomerShiftConfigurationDTO> addShiftsConfig(List<CustomerShiftConfigurationDTO> shiftsConfig);

}
