package com.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entity.Employee;
import com.employee.service.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/add")
	public Employee addEmployee(@RequestBody Employee cust)
	{
		return employeeService.postEmployee(cust);
	}
	@GetMapping("/all")
	public List<Employee> getAllEmployee()
	{
		return employeeService.readEmployee();
	}
	@DeleteMapping("/del/{eid}")
	public void deleteEmployee(@PathVariable int eid)
	{
		employeeService.deleteEmployee(eid);
	}
	@GetMapping("/{eid}")
	public ResponseEntity<Employee>getEmployeeById(@PathVariable int eid){
		Employee employee=employeeService.getEmployeeById(eid);
		if(employee == null)
		{
			return ResponseEntity.notFound().build();
		}
		else
		{
			return ResponseEntity.ok(employee);
		}
	}
	@PutMapping("/{eid}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int eid,@RequestBody Employee empl)
	{
		Employee employee=employeeService.updateEmployee(eid,empl);
		if(employee==null)
		{
			return ResponseEntity.notFound().build();
		}
		else
		{
			return ResponseEntity.ok(employee);
		}
	}
}
