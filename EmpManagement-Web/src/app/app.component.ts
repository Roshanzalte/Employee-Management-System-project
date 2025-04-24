import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink} from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, ListEmployeeComponent, HttpClientModule], // i am stuck ?when i import routerlink 
  templateUrl: './app.component.html',                                                        //link created 
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'EmpManagementWeb';
}
