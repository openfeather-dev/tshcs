package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.UserProfile;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, String>{
	List<UserProfile> findAllByOrderByFnameAsc();

}
