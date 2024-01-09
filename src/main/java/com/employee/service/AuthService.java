package com.employee.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.employee.entity.Signup;
import com.employee.repo.SignupRepo;


@Service
public class AuthService {
	@Autowired
	private SignupRepo signupRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public boolean createSignup(com.employee.dto.SignupRequest signupRequest) {
		
		if(signupRepo.existsByEmail(signupRequest.getEmail()))
		{
			return false;
		}
		Signup signup=new Signup();
		BeanUtils.copyProperties(signupRequest, signup);
		
		//Hashing the password
		String hashPassword=passwordEncoder.encode(signupRequest.getPassword());
		signup.setPassword(hashPassword);
		signupRepo.save(signup);
		
		return true;
	}
	
}
