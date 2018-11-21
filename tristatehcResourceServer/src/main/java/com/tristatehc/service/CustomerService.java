package com.tristatehc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.CustomerDTO;

@Service
public interface CustomerService {
	
	public List<CustomerDTO> getAllCustomers();
	

}
