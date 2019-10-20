import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent implements OnInit {

  public doughnutchartLabels =['Sales Compliance', 'Procedure Compliance', 'Expert Competency', 'Legal Compliance','Closing', 'Selling contract', 'Contract Information', 'Customer Qualification','High-Pressure Selling','Profanity','Contract Price','Entitlement Policy','Misleading Information','Issue Resolution','Product Knowledge','Active Listening','Issue Diagnosis','Client Verification','Survey Prompt','KB Article'];

  public chartColors: any[] = [
    { 
      backgroundColor:["#FFA500","#FFA500","#FFA500","#FFA500","#FFA500","#FFA500","#FFA500","#FFA500","#C0C0C0","#C0C0C0","#C0C0C0","#C0C0C0","#C0C0C0","#0000A0","#0000A0","#0000A0","#0000A0","#0000A0","#e63900","#e63900"] 
    },
    {
      backgroundColor:["#FFA500","#C0C0C0","#0000A0","#e63900"] 
    }
  
  
  ] ;

  


  public doughnutChartDataT =[3,2.2,2.1,0.8];
  public doughnutChartData =[0,0,0,0,5,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2 ];
  

  public doughnutChartType = "doughnut";

  constructor() { }

  ngOnInit() {
  }

}
