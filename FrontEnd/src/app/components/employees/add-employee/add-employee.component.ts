import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '',
    salary: 0,
    department: ''
  };

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    Swal.fire({
      title: 'Empleado agregado',
      icon: 'success',
      confirmButtonColor: '#3085d6',
    }).then(result => {
      if (result.isConfirmed) {
        this.employeeService.addEmployee(this.addEmployeeRequest)
        .subscribe({
          next: (employee) => {
            this.router.navigate(['employees']);
          }
        });
      }
      else{}
    })
   
  }
  backEmployee(){
    this.router.navigate(['employees']);
  }

}
