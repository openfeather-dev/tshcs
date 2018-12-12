package com.tristatehc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tristatehc.entity.Zipcode;

@Repository
public interface ZipcodeRepository extends JpaRepository<Zipcode, String>{

}
