package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.CustShiftConfigRepository;
import com.tristatehc.dto.CustomerShiftConfigurationDTO;
import com.tristatehc.entity.CustomerShiftConfiguration;
import com.tristatehc.mapper.UserMapper;

@Service
public class CustShiftConfigServiceImpl implements CustShiftConfigService {

	@Autowired
	CustShiftConfigRepository custRepository;

	public List<CustomerShiftConfigurationDTO> getCustShiftConfig(String clientId) {
		List<CustomerShiftConfigurationDTO> custConfigDto= new ArrayList<>();
		if(!clientId.isEmpty()) {
			List<CustomerShiftConfiguration> custConfig = custRepository.findAllByconfigId_clientIdIgnoreCaseOrderByShiftSequenceAsc(clientId);
			custConfigDto = custConfig.stream().map(custShiftConfig -> UserMapper.INSTANCE.custShiftConfigToCustShiftConfigDto(custShiftConfig)).collect(Collectors.toList());
		}
		return custConfigDto;
	}

	public List<CustomerShiftConfigurationDTO> addShiftsConfig(List<CustomerShiftConfigurationDTO> shiftsConfig) {
		List<CustomerShiftConfigurationDTO> deleteShifts = shiftsConfig.stream().filter(shift -> shift.getSeqLabel().contains("Custom Shift")  && shift.getshiftTime().equals("-")).collect(Collectors.toList());
		List<CustomerShiftConfiguration> shifts = shiftsConfig.stream().map(shiftDto -> UserMapper.INSTANCE.custShiftConfigDtoToCustShiftConfig(shiftDto)).collect(Collectors.toList());
		List<CustomerShiftConfiguration> savedShifts = custRepository.saveAll(shifts);
		//Delete custom shifts with empty shift time
		custRepository.deleteAll(deleteShifts.stream().map(deleteShift -> UserMapper.INSTANCE.custShiftConfigDtoToCustShiftConfig(deleteShift)).collect(Collectors.toList()));
		return savedShifts.stream().map(savedShift -> UserMapper.INSTANCE.custShiftConfigToCustShiftConfigDto(savedShift)).collect(Collectors.toList())  ;
	}

}
