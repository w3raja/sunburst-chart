import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';

const routes: Routes = [
  {path:'sunburst-chart', component:MyDoughnutChartComponent},
  {path:'bar-chart', component:MyBarChartComponent},
  {path:'radar-chart', component:MyRadarChartComponent},
  {path:'pie-chart', component:MyPieChartComponent},
  {path:'**', component:MyDoughnutChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
