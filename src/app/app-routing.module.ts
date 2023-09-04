import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeeComponent } from './components/add-employeee/add-employeee.component';

const routes: Routes = [
// {path:'add',component:AddEmployeeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

