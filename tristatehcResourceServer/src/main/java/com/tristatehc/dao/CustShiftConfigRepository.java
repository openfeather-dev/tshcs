package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.CustomerShiftConfiguration;
import com.tristatehc.entity.CustomerShiftConfigurationId;

@Repository
public interface CustShiftConfigRepository extends JpaRepository<CustomerShiftConfiguration, CustomerShiftConfigurationId>{
	List<CustomerShiftConfiguration> findAllByconfigId_clientIdIgnoreCaseOrderByShiftSequenceAsc(String clientId);
}
