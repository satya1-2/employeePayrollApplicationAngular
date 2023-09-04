

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';


@Component({
  selector: 'app-home',
  template: '<app-add-employeee [employeeData]="employee"></app-add-employeee>',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public employeeCount: number = 10; 
  public employeeDetails: Employee[] = [];
  httpService: any;
  snackBar: any;
  dataService: any;
  router: any;

  constructor( ) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe((data: { data: Employee[]; }) => {
      this.employeeDetails = data.data;
      this.employeeCount = this.employeeDetails.length;
      //console.log(this.employeeDetails);
    } );
  }
  httpServicegetEmployeeData() {
    throw new Error('Method not implemented.');
  }

  remove(id: number): void {
    this.httpService.deleteEmployeeData(id).subscribe((response: any) => {
      console.log(response);
      this.ngOnInit();
      this.snackBar.open('Deleted Successfully!', '', {duration: 4000, verticalPosition: 'top'});
    });
  }

  update(employee: Employee): void {
    this.dataService.changeEmployee(employee);
    this.router.navigateByUrl('/add/' + employee.id);
    this.httpService.updateEmployeData(employee.id, employee).subscribe((response: any) => {
      console.log(response);
      this.ngOnInit();
    });
  }
}
