package com.tristatehc.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.AssignShiftsRepository;
import com.tristatehc.dto.AssignShiftsReqDTO;
import com.tristatehc.dto.AssignShiftsRespDTO;
import com.tristatehc.dto.CreateAssignShiftsDTO;
import com.tristatehc.dto.DropDownDTO;
import com.tristatehc.entity.AssignShifts;

@Service
public class AssignShiftServiceImpl implements AssignShiftService {

	@Autowired
	private AssignShiftsRepository assignShiftsRepository;
	@Override
	public List<AssignShiftsRespDTO> getAssignedShifts(AssignShiftsReqDTO assignShiftsReqDTO) {
		List<AssignShifts>assignedShifts = assignShiftsRepository.getAssignedShifts(assignShiftsReqDTO.getCustomer(),assignShiftsReqDTO.getEmail(), assignShiftsReqDTO.getShiftDate(), assignShiftsReqDTO.getFromSearchDate(), assignShiftsReqDTO.getToSearchDate(), assignShiftsReqDTO.getSearchFuture1(), assignShiftsReqDTO.getSearchFuture2(), assignShiftsReqDTO.getSearchFuture3(), assignShiftsReqDTO.getSearchFuture4(), assignShiftsReqDTO.getSearchFuture5(), assignShiftsReqDTO.getSearchFuture6(), assignShiftsReqDTO.getSearchFutureList());
		List<AssignShiftsRespDTO> assignListRespList = populateAssignedShiftsRespDTO(assignedShifts);
		
		return assignListRespList;
	}

	private List<AssignShiftsRespDTO> populateAssignedShiftsRespDTO(List<AssignShifts> assignedShifts) {
		List<AssignShiftsRespDTO> assignListRespList = new ArrayList<>();
		for (AssignShifts assignShifts : assignedShifts) {
			AssignShiftsRespDTO assignShiftsRespDTO = new AssignShiftsRespDTO();
			
			assignShiftsRespDTO.setShiftId(assignShifts.getShiftId());

			
			assignShiftsRespDTO.setCustid(assignShifts.getCustid()) ;
			
			assignShiftsRespDTO.setShiftDate(assignShifts.getShiftDate());
			
			if(null != assignShifts.getShiftTitleCode()) {
				List<String> shiftTitles = Arrays.asList(assignShifts.getShiftTitleCode().split(","));
				
				assignShiftsRespDTO.setShiftTitleCode(getDropDownDTO(shiftTitles));
				assignShiftsRespDTO.setSelectedTitle(assignShiftsRespDTO.getShiftTitleCode().get(0));
			}
			if(null != assignShifts.getShiftTime()) {
				List<String> shiftTimes = Arrays.asList(assignShifts.getShiftTime().split(","));
				assignShiftsRespDTO.setShiftTime(getDropDownDTO(shiftTimes)) ;
				assignShiftsRespDTO.setSelectedShiftTime(assignShiftsRespDTO.getShiftTime().get(0));
				
			}
			if(null !=assignShifts.getNameList()) {
				
				List<String> nameList = Arrays.asList(assignShifts.getNameList().split(","));
				assignShiftsRespDTO.setNameList(getDropDownDTO(nameList));
				assignShiftsRespDTO.setSelectedName(assignShiftsRespDTO.getNameList().get(0));

			}
			if(null!=assignShifts.getStatus()) {
				
				List<String> statusList = Arrays.asList(assignShifts.getStatus().split(","));
				assignShiftsRespDTO.setStatus(getDropDownDTO(statusList));
				assignShiftsRespDTO.setSelectedStatus(assignShiftsRespDTO.getStatus().get(0));
			}
			
						
			assignShiftsRespDTO.setTimeIn(assignShifts.getTimeIn());
			
			assignShiftsRespDTO.setTimeOut( assignShifts.getTimeOut());
			
			assignShiftsRespDTO.setBreakTime(assignShifts.getBreakTime());
			
			assignShiftsRespDTO.setFut1(assignShifts.getFut1());
			
			assignShiftsRespDTO.setFut2(assignShifts.getFut2());
			
		
			if(null !=assignShifts.getMessageCadidateList()) {
				List<String> messageCandiList = Arrays.asList(assignShifts.getMessageCadidateList().split(","));
				assignShiftsRespDTO.setMessageCadidateList(getDropDownDTO(messageCandiList));
				
			}
			
			assignShiftsRespDTO.setComments(assignShifts.getComments());
			assignListRespList.add(assignShiftsRespDTO);
		}
		return assignListRespList;
	}
	
	private List<DropDownDTO> getDropDownDTO(List<String> dropdowns){
		List<DropDownDTO> dropdownDtoList = new ArrayList<>();
		for (String value : dropdowns) {
			DropDownDTO dto = new DropDownDTO();
			dto.setLabel(value);
			dto.setValue(value);
			
			dropdownDtoList.add(dto);
		}
		return dropdownDtoList;
		
		
		
	}

	@Override
	public AssignShiftsRespDTO getValuesForNewAssignment(AssignShiftsReqDTO assignShiftsReqDTO) {
		AssignShifts assignShifts = assignShiftsRepository.getValuesForNewAssignment(assignShiftsReqDTO.getCustomer(), assignShiftsReqDTO.getEmail());
		 
			AssignShiftsRespDTO assignShiftsRespDTO = new AssignShiftsRespDTO();
			
			assignShiftsRespDTO.setShiftId(assignShifts.getShiftId());

			
			assignShiftsRespDTO.setCustid(assignShifts.getCustid()) ;
			
			assignShiftsRespDTO.setShiftDate(assignShifts.getShiftDate());
			
			
			List<String> shiftTitles = Arrays.asList(assignShifts.getShiftTitleCode().split(","));
			
			assignShiftsRespDTO.setShiftTitleCode(getDropDownDTO(shiftTitles));
			List<String> shiftTimes = Arrays.asList(assignShifts.getShiftTime().split(","));
			assignShiftsRespDTO.setShiftTime(getDropDownDTO(shiftTimes)) ;
			
			List<String> nameList = Arrays.asList(assignShifts.getNameList().split(","));
			assignShiftsRespDTO.setNameList(getDropDownDTO(nameList));	
			List<String> statusList = Arrays.asList(assignShifts.getStatus().split(","));
			assignShiftsRespDTO.setStatus(getDropDownDTO(statusList));
			assignShiftsRespDTO.setTimeIn(assignShifts.getTimeIn());
			
			assignShiftsRespDTO.setTimeOut( assignShifts.getTimeOut());
			
			assignShiftsRespDTO.setBreakTime(assignShifts.getBreakTime());
			
			assignShiftsRespDTO.setFut1(assignShifts.getFut1());
			
			assignShiftsRespDTO.setFut2(assignShifts.getFut2());
			
		
			
			List<String> messageCandiList = Arrays.asList(assignShifts.getMessageCadidateList().split(","));
			assignShiftsRespDTO.setMessageCadidateList(getDropDownDTO(messageCandiList));
			
			assignShiftsRespDTO.setComments(assignShifts.getComments());
			
		
		return assignShiftsRespDTO;
	}

	@Override
	public List<AssignShiftsRespDTO> createNewAssignShift(CreateAssignShiftsDTO assignShiftsReqDTO) {
		List<AssignShifts> assignShifts = assignShiftsRepository.newAssignment(assignShiftsReqDTO.getCustid(), assignShiftsReqDTO.getEmail(), assignShiftsReqDTO.getShiftDate(), assignShiftsReqDTO.getShiftId(), assignShiftsReqDTO.getShiftTitleCode(),
				assignShiftsReqDTO.getShiftTime(), assignShiftsReqDTO.getNameList(), assignShiftsReqDTO.getStatus(), assignShiftsReqDTO.getTimeIn(), assignShiftsReqDTO.getTimeOut(), assignShiftsReqDTO.getBreakTime(), assignShiftsReqDTO.getMessageCadidateList().toString(), assignShiftsReqDTO.getComments(), assignShiftsReqDTO.getAction());
		return populateAssignedShiftsRespDTO(assignShifts);
		 
	}

}
