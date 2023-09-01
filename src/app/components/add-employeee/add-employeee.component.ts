import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-employeee',
  templateUrl: './add-employeee.component.html',
  styleUrls: ['./add-employeee.component.scss']
})
export class AddEmployeeeComponent implements OnInit{
//public employee: Employee = new Employee();

employeeForm!: FormGroup
  departments: Array<any> = [
    {id: 1, name: "HR",value: "HR", checked: false},
    {id: 2, name: "Sales",value: "Sales", checked: false },
    {id: 3,name: "Finance",value: "Finance",checked: false },
    {id: 4, name: "Engineer",value: "Engineer",checked: false},
    {id: 5,name: "Other",value: "Other",checked: false  }
  ]
  salary: number = 400000;
  salaryForm: any;
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  updateSetting(event: Event) {
    this.salary = (event.target as HTMLInputElement).valueAsNumber;
    console.log('Selected Salary:', this.salary);
    this.salaryForm.get('salary')?.setValue(this.salary);
  }

  employeeFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder ) {
    this.employeeFormGroup = this.formBuilder.group({
      name: '',
      profileimage:'',
      gender:'',
      department:'',
      salary:'',
      date:'',
      notes:''

    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    const dataString = JSON.stringify(this.employeeFormGroup.value);
    localStorage.setItem('formData', dataString);
    this.employeeFormGroup.reset();
  }

  onDepartmentChange(event: any) {
    const departmentValue = event.value
    const SelectedDepartment = event.checked
    const departmentArray : FormArray =this.employeeForm.get('department') as FormArray;

    if (SelectedDepartment) {
      departmentArray.push(new FormControl(departmentValue));
    } else {
      const index = departmentArray.controls.findIndex(x => x.value ===departmentValue);
      departmentArray.removeAt(index);
    }
  }

}