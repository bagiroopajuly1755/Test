package com.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.login.model.User;
import com.login.repository.UserRepository;


@RestController
public class LoginController {

	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping(value="/home")
	public String getMessage(){
		//System.out.println("dataSource= "+ dataSource);;
		return "Message as Hello";
	}
	@GetMapping(value="/add")
	public List<User> getUserDetails(){
		List<User> userList=(List<User>) userRepository.findAll();
		for(User user:userList){
			System.out.println("id="+user.getId()+"name="+user.getName() +"code=" +user.getCode());
		}
		return userList;
	}
}
