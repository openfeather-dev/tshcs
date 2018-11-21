package com.tristatehc.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.CustShiftConfigRepository;
import com.tristatehc.dao.ShiftCountByCustomerRepository;
import com.tristatehc.dao.TitlesRepository;
import com.tristatehc.dto.TitlesDTO;
import com.tristatehc.entity.ShiftCountByCustomer;
import com.tristatehc.entity.Titles;
import com.tristatehc.mapper.UserMapper;

@Service
public class CustAddShiftServiceImpl implements CustAddShiftService {
	
	@Autowired
	TitlesRepository titlesRepo;
	
	@Autowired
	ShiftCountByCustomerRepository shiftCountByCustomerRepository;
	
	

	@Override
	public List<TitlesDTO> getTitles(String state) {
		List<Titles> titles = titlesRepo.findBystateIgnoreCaseOrderBySequence(state);
		return titles.stream().map(title -> UserMapper.INSTANCE.titlesToTitlesDto(title)).collect(Collectors.toList());
	
	}

	@Override
	public Map<String, String> getShifts(String date,String customerId) {
		List<ShiftCountByCustomer> shifts =  shiftCountByCustomerRepository.getCustomerShifts("custB","09/10/2018",0,70);
		System.out.println("shifts  " +shifts.size());
		
		Map<String,String> shiftsMap = new HashMap<>();
		 shifts.forEach(shiftByCustomer->{
			 System.out.println(shiftByCustomer);
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+shiftByCustomer.getId().getShiftDt()+shiftByCustomer.getId().getShiftTmMt()+"required",shiftByCustomer.getTotal());
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+shiftByCustomer.getId().getShiftDt()+shiftByCustomer.getId().getShiftTmMt()+"assigned",shiftByCustomer.getAssign());
			 shiftsMap.put(shiftByCustomer.getId().getShiftTitleCode()+shiftByCustomer.getId().getShiftDt()+shiftByCustomer.getId().getShiftTmMt()+"unassigned",shiftByCustomer.getUnsassign());
		 });
		 System.out.println("shiftsMap  " +shiftsMap);
		 shiftsMap.put("CNA11/11/201814:00-22:00required", "2");
		 
		 return shiftsMap;
	}
	
	
	
	

}
