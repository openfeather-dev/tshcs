package com.tristatehc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.CellPhoneProvider;

@Repository
public interface CellPhoneProviderRepository extends JpaRepository<CellPhoneProvider, String>{

}
