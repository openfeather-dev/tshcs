package com.tristatehc.dao;

import org.springframework.data.repository.CrudRepository;

import com.tristatehc.entity.AssignShifts;

public interface AssignShiftsRepository extends CrudRepository<AssignShifts, String>,AssignShiftCustomRepository{

}
