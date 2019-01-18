package com.tristatehc.service;

import java.util.List;

import com.tristatehc.dto.AssignShiftsReqDTO;
import com.tristatehc.dto.AssignShiftsRespDTO;
import com.tristatehc.dto.CreateAssignShiftsDTO;
import com.tristatehc.entity.AssignShifts;

public interface AssignShiftService {
	public List<AssignShiftsRespDTO> getAssignedShifts(AssignShiftsReqDTO assignShiftsReqDTO);
	public AssignShiftsRespDTO getValuesForNewAssignment(AssignShiftsReqDTO assignShiftsReqDTO);
	public List<AssignShiftsRespDTO> createNewAssignShift(CreateAssignShiftsDTO assignShiftsReqDTO);

}
