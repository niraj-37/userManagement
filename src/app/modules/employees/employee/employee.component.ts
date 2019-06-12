import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/service/employee/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  countrys:string[]=[
    "India",
    "England",
    "USA",
    "UK",
  ]
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
  }

  createEmployee(currentEmployee: Employee) {
    if (currentEmployee.id === null) {
      this.employeeService.createEmployee(currentEmployee).subscribe(
        (data) => {
          this.employeeService.getAllEmployee();
        
        });
    } else {
      this.employeeService.updateEmployee(currentEmployee).subscribe(
        (data) => {
          this.employeeService.getAllEmployee();
        });
    }

  }

  clearEmployee(currentEmployee: Employee) {
    this.employeeService.currentEmployee = {
      id: null,
      firstName: '',
      email: '',
      address: '',
      contactNumber: null,
      url: '',
      country:'',
      dob:''
    }
  }
}
