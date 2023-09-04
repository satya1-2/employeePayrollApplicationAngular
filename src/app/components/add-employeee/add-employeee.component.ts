import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-employeee',
  templateUrl: './add-employeee.component.html',
  styleUrls: ['./add-employeee.component.scss']
})
export class AddEmployeeeComponent implements OnInit{
onCheckboxChange($event: MatCheckboxChange) {
throw new Error('Method not implemented.');
}

  departments: Array<any> = [
    {id: 1, name: "HR",value: "HR", checked: false},
    {id: 2, name: "Sales",value: "Sales", checked: false },
    {id: 3,name: "Finance",value: "Finance",checked: false },
    {id: 4, name: "Engineer",value: "Engineer",checked: false},
    {id: 5,name: "Other",value: "Other",checked: false  }
  ]
 

  

  employeeFormGroup: FormGroup;

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

  onSubmit() {
    const dataString = JSON.stringify(this.employeeFormGroup.value);
    localStorage.setItem('formData', dataString);
    this.employeeFormGroup.reset();
  }

  onDepartmentChange(event: any) {
    const departmentValue = event.value
    const SelectedDepartment = event.checked
    const departmentArray : FormArray =this.employeeFormGroup.get('department') as FormArray;

    if (SelectedDepartment) {
      departmentArray.push(new FormControl(departmentValue));
    } else {
      const index = departmentArray.controls.findIndex(x => x.value ===departmentValue);
      departmentArray.removeAt(index);
    }
  }

}