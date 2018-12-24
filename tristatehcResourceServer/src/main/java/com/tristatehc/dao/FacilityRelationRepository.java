package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tristatehc.entity.FacilityRelation;
import com.tristatehc.entity.FacilityRelationId;

public interface FacilityRelationRepository extends JpaRepository<FacilityRelation, FacilityRelationId>{
	
	List<FacilityRelation> findAllByCandidateId(String cadiId);
}
