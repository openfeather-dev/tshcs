package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.dto.CustomerDTO;
import com.tristatehc.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String>{
	List<Customer> findAllByOrderByLastNameAsc();
}
