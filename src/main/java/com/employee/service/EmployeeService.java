package com.employee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.repo.EmployeeRepo;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepo employeeRepo;
	
	public Employee postEmployee(Employee emp)
	{
		return employeeRepo.save(emp);
	}

	public List<Employee> readEmployee() {
		return employeeRepo.findAll();
	}
	public void deleteEmployee(int cid) {
		employeeRepo.deleteById(cid);	
	}

	public Employee getEmployeeById(int cid) {
		return employeeRepo.findById(cid).orElse(null);	
	}

	public Employee updateEmployee(int eid, Employee empl) {
		Optional<Employee> optionalEmployee=employeeRepo.findById(eid);
		if(optionalEmployee.isPresent())
		{
			Employee obj=optionalEmployee.get();
			obj.setName(empl.getName());
			obj.setRole(empl.getRole());
			obj.setPhone(empl.getPhone());
			return employeeRepo.save(obj);
		}
		return null;
	}
}
