package com.login;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class LoginAppApplication {

	public static void main(String[] args) {
		System.out.println("Roopa");
		SpringApplication.run(LoginAppApplication.class, args);
	}
	@GetMapping(value="/login")
	public String getLogin(){
		//System.out.println("dataSource= "+ dataSource);;
		return "Welcome Roopa";
	}
}
