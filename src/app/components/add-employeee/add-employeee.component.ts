import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-employeee',
  templateUrl: './add-employeee.component.html',
  styleUrls: ['./add-employeee.component.scss']
})
export class AddEmployeeeComponent implements OnInit{
  public employee:Employee=new Employee();
  employeeFormGroup: FormGroup<any>;


  departments: Array<any> = [
    {id: 1, name: "HR",value: "HR", checked: false},
    {id: 2, name: "Sales",value: "Sales", checked: false },
    {id: 3,name: "Finance",value: "Finance",checked: false },
    {id: 4, name: "Engineer",value: "Engineer",checked: false},
    {id: 5,name: "Other",value: "Other",checked: false  }
  ]
 constructor(private formBuilder: FormBuilder, 
    private router: Router,
   private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar) {
this.employeeFormGroup = this.formBuilder.group({
name: new FormControl('', [Validators.required, Validators.pattern("^[A-Z][a-zA-Z\\s]{2,}$")]),
profilePic: new FormControl('', [Validators.required]),
gender: new FormControl('', [Validators.required]),
department: this.formBuilder.array([], [Validators.required]),
salary: new FormControl('', [Validators.required]),
startDate: new FormControl('', [Validators.required]),
note: new FormControl('', [Validators.required]) 
})
}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}


  salary: number = 400000;
  updateSetting(event:any) {
    this.salary = event.value;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
  onCheckboxChange(event: MatCheckboxChange) {
    const department: FormArray = this.employeeFormGroup.get('department') as FormArray;

    if (event.checked) {
      department.push(new FormControl(event.source.value));
    } else {
      const index = department.controls.findIndex(x => x.value === event.source.value);
      department.removeAt(index);
    }
  }
  onSubmit() {
    const dataString = JSON.stringify(this.employeeFormGroup.value);
    localStorage.setItem('formData', dataString);
    this.employeeFormGroup.reset();
  console .log (dataString)
  }


}