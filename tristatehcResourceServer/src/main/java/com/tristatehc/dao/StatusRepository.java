package com.tristatehc.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.Status;

@Repository
public interface StatusRepository  extends JpaRepository<Status, Integer>{
	
	Optional<Status> findByStatus(String status);

}
