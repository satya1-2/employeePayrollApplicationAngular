import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeeComponent } from './components/add-employeee/add-employeee.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path:'add',component:AddEmployeeeComponent },
 {path:'',component:AddEmployeeeComponent },
  {path:'home',component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

