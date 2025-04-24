import { Routes,RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { Employee } from './employee';
import { CreateEmployeeComponent } from './create-employee/create-employee.component'; 
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


export const routes: Routes = [

    {  path:'employees',component:ListEmployeeComponent },

    { path:'create-employee',component:CreateEmployeeComponent},

    {  path:'',redirectTo:'employees', pathMatch:'full' },

    {path:'update-employee/:id',component:UpdateEmployeeComponent }
   
    
];