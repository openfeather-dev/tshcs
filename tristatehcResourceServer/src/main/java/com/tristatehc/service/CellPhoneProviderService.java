package com.tristatehc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.CellPhoneProviderDTO;

@Service
public interface CellPhoneProviderService {
	public List<CellPhoneProviderDTO> getFilteredProviders();

}
