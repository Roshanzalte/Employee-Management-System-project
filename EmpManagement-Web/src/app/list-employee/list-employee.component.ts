import { CommonModule } from '@angular/common'; 
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule],  
  providers: [EmployeeService],  
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [] 

  constructor(private employeeService: EmployeeService,private route:Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data; 
    });
  }

  updateEmployee(id:number){
  this.route.navigate(['update-employee',id])
  }
  
  deleteEmployee(id:number){
    this.employeeService.deleteEmployeeById(id).subscribe(data =>{
      alert("employee delete successfully");

     this.employees =this.employees.filter(emp => emp.id !== id)
    })
  }
}
