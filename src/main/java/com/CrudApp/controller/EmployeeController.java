package com.CrudApp.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CrudApp.Exception.ResourceNotFoundException;
import com.CrudApp.entity.Employee;
import com.CrudApp.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200") 
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/employee")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	
	@PostMapping("/employee")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
	    Employee employee = employeeRepository.findById(id)
	    		.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
	    return ResponseEntity.ok(employee);
	}

	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetail){
		 Employee employee = employeeRepository.findById(id)
		    		.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));
		 
		 employee.setFirstname(employeeDetail.getFirstname());
		 employee.setLastname(employeeDetail.getLastname());
		 employeeRepository.save(employee);
		 
		 return ResponseEntity.ok(employee);
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmplyeeByID(@PathVariable int id){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("emplyee not found:" + id));
		
		employeeRepository.delete(employee);
		Map<String,Boolean>response =new HashMap<String,Boolean>();
		response.put("delete",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
