package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.Titles;

@Repository
public interface TitlesRepository extends JpaRepository<Titles, Long>{
	List<Titles> findBystateIgnoreCaseOrderBySequence(String state);

}
