

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-home',
  template: '<app-add-employeee [employeeData]="employee"></app-add-employeee>',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public employeeCount: number = 0; 
  public employeeDetails: Employee[] = [];


  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.getEmployee().subscribe(response => {
      this.employeeDetails = response.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    } );
  }
  // httpServicegetEmployeeData() {
  //   throw new Error('Method not implemented.');
  // }

  remove(id: number): void {
    // this.httpService.deleteEmployeeData(id).subscribe((response: any) => {
    //   console.log(response);
    //   this.ngOnInit();
    //   this.snackBar.open('Deleted Successfully!', '', {duration: 4000, verticalPosition: 'top'});
    // });
  }

  update(employee: Employee): void {
    // this.dataService.changeEmployee(employee);
    // this.router.navigateByUrl('/add/' + employee.id);
    // this.httpService.updateEmployeData(employee.id, employee).subscribe((response: any) => {
    //   console.log(response);
    //   this.ngOnInit();
    // });
  }
}
