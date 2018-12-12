package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.CellPhoneProviderRepository;
import com.tristatehc.dto.CellPhoneProviderDTO;
import com.tristatehc.entity.CellPhoneProvider;
import com.tristatehc.mapper.UserMapper;

@Service
public class CellPhoneProviderServiceImpl implements CellPhoneProviderService {

	@Autowired
	CellPhoneProviderRepository repository;
	 
	@Override
	public List<CellPhoneProviderDTO> getFilteredProviders() {
		List<CellPhoneProvider> providers = repository.findAll();
		List<CellPhoneProviderDTO> providersDto = new ArrayList<>();
		if(!providers.isEmpty()) {
			providersDto = providers.stream().map(provider -> UserMapper.INSTANCE.providerToproviderDto(provider)).collect(Collectors.toList());
		}
		
		return providersDto;
	}

}
