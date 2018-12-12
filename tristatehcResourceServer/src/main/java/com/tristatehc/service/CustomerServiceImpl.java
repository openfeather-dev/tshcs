package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.CustomerRepository;
import com.tristatehc.dto.CustomerDTO;
import com.tristatehc.entity.Customer;
import com.tristatehc.mapper.UserMapper;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	CustomerRepository customerRepository;

	public List<CustomerDTO> getAllCustomers() {
		List<Customer> customers = customerRepository.findAllByOrderByLastNameAsc();
		List<CustomerDTO> customerDto = new ArrayList<>();
		if(!customers.isEmpty()) {
			customerDto = customers.stream().map(customer -> UserMapper.INSTANCE.customerToCustomerDto(customer)).collect(Collectors.toList());
		}
		return customerDto;
	}
	
	

}
