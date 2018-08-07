package com.tristatehc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

}
