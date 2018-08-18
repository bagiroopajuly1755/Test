package com.login.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.login.model.User;

@Repository
public interface  UserRepository extends CrudRepository<User, Long>{
	
	
	

}
