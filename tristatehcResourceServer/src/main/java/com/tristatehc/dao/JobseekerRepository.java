package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.Jobseeker;

@Repository
public interface JobseekerRepository extends JpaRepository<Jobseeker,String>{
	List<Jobseeker> findAllByOrderByFirstNameAsc();

}
