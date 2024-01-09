package com.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dto.SignupRequest;
import com.employee.service.AuthService;


@RestController
@RequestMapping("/signup")
@CrossOrigin("*")
public class SignupController {
	@Autowired
	private AuthService authService;
	@PostMapping
	public ResponseEntity<String> signupUser(@RequestBody SignupRequest signupRequest)
	{
		boolean isUserCreated=authService.createSignup(signupRequest);
		if(isUserCreated) {
			return ResponseEntity.status(HttpStatus.CREATED).body("User Created Successfully");
		}
		else
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not created");
		}
	}

}
