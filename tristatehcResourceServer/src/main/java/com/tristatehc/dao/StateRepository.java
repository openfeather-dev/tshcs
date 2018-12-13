package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.State;

@Repository
public interface StateRepository  extends JpaRepository<State,Integer>{
	List<State> findAllByOrderByStateNameAsc();
}
