import { Component } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  providers: [EmployeeService,],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {


  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private route: Router) { }

  onSubmit() {
    this.insertEmployee();
    console.log(this.employee);
  }

  insertEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      this.gotoEmployeelist();
      console.log(data);
      alert('Add employee sucessfully')
    })
  }

  gotoEmployeelist() {
    this.route.navigate(['/employees'])
  }
}
