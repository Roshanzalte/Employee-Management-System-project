import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8282/employee';  

  constructor(private httpClient: HttpClient) { }  

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiUrl);  
  }


  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}`,employee)
  }

  getEmployeeById(id:number):Observable<Employee>{
        return this.httpClient.get<Employee>(`${this.apiUrl}/${id}`)
  }

  updateEmployee(id:number,employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.apiUrl}/${id}`,employee)
  }

  deleteEmployeeById(id:number):Observable<{message:string}>{
       return this.httpClient.delete<{message:string}>(`${this.apiUrl}/${id}`, { responseType:'json' })
  }
} 
