package com.tristatehc.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.ShiftCountByCustomerRepository;
import com.tristatehc.dto.CustShiftDTO;
import com.tristatehc.entity.ShiftCountByCustomer;

@Service
public class CustAddShiftServiceImpl implements CustAddShiftService {
	
	@Autowired
	ShiftCountByCustomerRepository shiftCountByCustomerRepository;
	
	final static String DELIMITER = "_";
	Logger logger = LoggerFactory.getLogger(CustAddShiftServiceImpl.class);
	
	@Override
	public Map<String, String> getShifts(String date,String customerId) {
		logger.info("Date :"+date+" , Customer Id :"+customerId);
		List<ShiftCountByCustomer> shifts =  shiftCountByCustomerRepository.getCustomerShifts(customerId,date,-7,7);
		
		Map<String,String> shiftsMap = new HashMap<>();
		 shifts.forEach(shiftByCustomer->{
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+DELIMITER+shiftByCustomer.getId().getShiftDt()+DELIMITER+shiftByCustomer.getId().getShiftTmMt()+DELIMITER+"required",shiftByCustomer.getTotal());
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+DELIMITER+shiftByCustomer.getId().getShiftDt()+DELIMITER+shiftByCustomer.getId().getShiftTmMt()+DELIMITER+"assigned",shiftByCustomer.getAssign());
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+DELIMITER+shiftByCustomer.getId().getShiftDt()+DELIMITER+shiftByCustomer.getId().getShiftTmMt()+DELIMITER+"unassigned",shiftByCustomer.getUnsassign());
		 });
		 
		 return shiftsMap;
	}


	@Override
	@Transactional
	public void saveShifts(CustShiftDTO shiftData) {
		logger.info(shiftData.toString());
       shiftData.getShifts().forEach((key,value) ->{
    	   String[] shiftDetails = key.split(DELIMITER);
    	   logger.info(shiftData.getAdminEmail()+","+shiftData.getCustomerId()+","+Integer.parseInt(value)+","+shiftData.getAssignedCount()+","+shiftData.getUnassignedCount()+","+shiftDetails[0]+","+shiftDetails[1]+","+shiftDetails[2]);
    	 shiftCountByCustomerRepository.saveCustomerShifts(shiftData.getAdminEmail(), shiftData.getCustomerId(), Integer.parseInt(value) , shiftData.getAssignedCount(), shiftData.getUnassignedCount(), shiftDetails[0], shiftDetails[1], shiftDetails[2]);
       });
				
	}
	

}
