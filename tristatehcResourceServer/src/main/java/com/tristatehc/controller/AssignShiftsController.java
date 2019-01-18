package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.AssignShiftsReqDTO;
import com.tristatehc.dto.AssignShiftsRespDTO;
import com.tristatehc.dto.CreateAssignShiftsDTO;
import com.tristatehc.service.AssignShiftService;

@RestController()
@RequestMapping("assignshifts")
public class AssignShiftsController {
	@Autowired
	AssignShiftService assignShiftService; 
	
	@RequestMapping(method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<AssignShiftsRespDTO> getAvailabilities(@RequestBody AssignShiftsReqDTO assignShiftsReqDTO){
		List<AssignShiftsRespDTO> assignShifts = assignShiftService.getAssignedShifts(assignShiftsReqDTO);
		System.out.println("assignShifts   "+assignShifts); 
		return assignShifts;
		
	}
	@RequestMapping(path="assign", method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public AssignShiftsRespDTO getValuesForNewAssignment(@RequestBody AssignShiftsReqDTO assignShiftsReqDTO){
		System.out.println("assignShiftsReqDTO   "+assignShiftsReqDTO); 
		AssignShiftsRespDTO newAssignmentValue = assignShiftService.getValuesForNewAssignment(assignShiftsReqDTO);
		System.out.println("newAssignmentValue   "+newAssignmentValue); 
		return newAssignmentValue;
		
	}
	
	@RequestMapping(path="newshift", method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<AssignShiftsRespDTO> newAssignment(@RequestBody CreateAssignShiftsDTO  assignShiftsReq){
		System.out.println("assignShiftsReqDTO   "+assignShiftsReq); 
		List<AssignShiftsRespDTO> assignedShifts = assignShiftService.createNewAssignShift(assignShiftsReq);
		System.out.println("newAssignmentValue   "+assignedShifts); 
		return assignedShifts;
		
	}
	
}
