package com.tristatehc.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.ShiftCountByCustomerRepository;
import com.tristatehc.entity.ShiftCountByCustomer;

@Service
public class CustAddShiftServiceImpl implements CustAddShiftService {
	
	@Autowired
	ShiftCountByCustomerRepository shiftCountByCustomerRepository;
	

	@Override
	public Map<String, String> getShifts(String date,String customerId) {
		List<ShiftCountByCustomer> shifts =  shiftCountByCustomerRepository.getCustomerShifts(customerId,date,0,70);
		
		Map<String,String> shiftsMap = new HashMap<>();
		 shifts.forEach(shiftByCustomer->{
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+shiftByCustomer.getId().getShiftDt()+shiftByCustomer.getId().getShiftTmMt()+"required",shiftByCustomer.getTotal());
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+shiftByCustomer.getId().getShiftDt()+shiftByCustomer.getId().getShiftTmMt()+"assigned",shiftByCustomer.getAssign());
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+shiftByCustomer.getId().getShiftDt()+shiftByCustomer.getId().getShiftTmMt()+"unassigned",shiftByCustomer.getUnsassign());
		 });
		 
		 return shiftsMap;
	}
	
	
	
	

}
