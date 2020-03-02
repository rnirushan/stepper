import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';


const routes: Routes = [
  {
    component: InputFormComponent,
    path: "form"
  },
  {
    component: UserListComponent,
    path: "list"
  },
  {
    component: PieChartComponent,
    path: "pie-chart"
  },
  {
    component: LineChartComponent,
    path: "line-chart"
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
