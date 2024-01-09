package com.employee.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.entity.Employee;
@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
