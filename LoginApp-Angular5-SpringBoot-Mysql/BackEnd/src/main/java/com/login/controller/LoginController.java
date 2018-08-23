package com.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping(value="/getUser")
	public List<User> getUserDetails(){
		List<User> userList=(List<User>) userRepository.findAll();
		for(User user:userList){
			System.out.println("id="+user.getId()+"name="+user.getUserName() +"code=" +user.getCode());
		}
		return userList;
	}
	@PostMapping(value="/addUser")
	public ResponseEntity<User> addUser(@RequestBody User user)
	{
		
		if(user !=null && user.getUserName() !=null)
			 user=userRepository.findByUserName(user.getUserName());
			if (user !=null)
				return new ResponseEntity(
						("user with username " + user.getUserName() + "already exist "),
						HttpStatus.CONFLICT);
			
			else 
				user.setRole("USER");
			   if(user.getCode()!=null)
				   user.setCode(user.getId().toString());
				userRepository.save(user);
			return new ResponseEntity(
						("User with UserName "+user.getUserName()+"Created Successfully"),
						HttpStatus.CREATED);
		
	}
}
