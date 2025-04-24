import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, } from '@angular/router';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  id: number;
  employee:Employee = new Employee;

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){
  this.id =this.route.snapshot.params['id']
  this.employeeService.getEmployeeById(this.id).subscribe(data =>{
    this.employee =data;
  })
  }
  onSubmit(){
  this.employeeService.updateEmployee(this.id,this.employee).subscribe(data =>{
    this.employee =data;
    this.gotoEmployeelist();
    alert("Update successfully")
  })
  }
  gotoEmployeelist() {
    this.router.navigate(['/employees'])
  }
}