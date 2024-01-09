package com.employee.service.jwt;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.employee.entity.Signup;
import com.employee.repo.SignupRepo;



@Service
public class UserService implements UserDetailsService {
	@Autowired
	private SignupRepo  signupRepo;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		Signup signup= signupRepo.findByEmail(email)
				.orElseThrow(()->new UsernameNotFoundException("User not found with "+email));
				
		return new User(signup.getEmail(),signup.getPassword(),Collections.emptyList());
	}
}
