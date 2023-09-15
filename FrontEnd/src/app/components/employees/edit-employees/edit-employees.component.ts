import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '',
    salary: 0,
    department: ''
  };

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          })
        }

      }
    })
  }

   updateEmployee() {

    Swal.fire({
      title: '¿Estas seguro que deseas modificar este empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then(result => {
      if (result.isConfirmed) {
        this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
          next: (response) => {
            this.router.navigate(['employees']);
          }
        });
      }
      else{
        this.router.navigate(['employees/edit']);

      }
    })



  
   }

   deleteEmployee(id: string) {

    Swal.fire({
      title: '¿Estas seguro que deseas elimidar este empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then(result => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id)
        .subscribe({
          next: (response) => {
            this.router.navigate(['employees']);
          }
        });
      }
      else{
        this.router.navigate(['employees/edit']);

      }
    })



   
   }
   backEmployee(){
    this.router.navigate(['employees']);
  }

}
