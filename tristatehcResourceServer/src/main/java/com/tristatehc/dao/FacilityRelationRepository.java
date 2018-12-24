package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tristatehc.entity.FacilityRelation;

public interface FacilityRelationRepository extends JpaRepository<FacilityRelation, Long>{
	
	List<FacilityRelation> findAllByCandidateId(String cadiId);
}
