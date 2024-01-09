package com.employee.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.entity.Signup;
@Repository
public interface SignupRepo extends JpaRepository<Signup, Integer>{

	boolean existsByEmail(String email);

	Optional<Signup> findByEmail(String email);
}
