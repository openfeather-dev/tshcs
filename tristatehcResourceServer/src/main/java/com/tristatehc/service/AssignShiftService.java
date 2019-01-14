package com.tristatehc.service;

import java.util.List;

import com.tristatehc.dto.AssignShiftsReqDTO;
import com.tristatehc.dto.AssignShiftsRespDTO;

public interface AssignShiftService {
	public List<AssignShiftsRespDTO> getAssignedShifts(AssignShiftsReqDTO assignShiftsReqDTO);
	public AssignShiftsRespDTO getValuesForNewAssignment(AssignShiftsReqDTO assignShiftsReqDTO);

}
