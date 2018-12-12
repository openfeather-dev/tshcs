package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.ZipcodeRepository;
import com.tristatehc.dto.ZipcodeDTO;
import com.tristatehc.entity.Zipcode;
import com.tristatehc.mapper.UserMapper;

@Service
public class ZipcodeServiceImpl implements ZipcodeService {
	
	@Autowired
	ZipcodeRepository zipcodeRespository;

	public List<ZipcodeDTO> getZipcodes(String query) {
		List<Zipcode> zipcodes = zipcodeRespository.findAll();
		List<ZipcodeDTO> zipcodesDto = new ArrayList<>();
		List<ZipcodeDTO> filteredZip = new ArrayList<>();
		if(!zipcodes.isEmpty()) {
			zipcodesDto = zipcodes.stream().map(zipcode -> UserMapper.INSTANCE.zipcodeToZipcodeDto(zipcode)).collect(Collectors.toList());
		}
		
		for(int i = 0; i < zipcodesDto.size(); i++) {
			ZipcodeDTO zipcode = zipcodesDto.get(i);
            if(Double.toString(zipcode.getZipCode()).indexOf(query) == 0) {
            	filteredZip.add(zipcode);
            }
        }
		
		return filteredZip;
	}

}


