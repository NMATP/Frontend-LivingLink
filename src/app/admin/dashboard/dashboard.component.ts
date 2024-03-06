import { Component } from '@angular/core';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  

  chart: any;
  
  constructor() {}

  ngOnInit(){
    this.createChart();
  }

  ngOnDestroy() {
    this.chart.destroy();
  }

  createChart() {
    this.chart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June","july","August","Sep","Oct","Nov","Dec"],
        datasets: [{
          label: 'Monthly Revenue',
          data: [1200, 1500, 1800, 2000, 2200, 2500, 2800, 3000, 3200, 3500, 3000, 2500],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  // createChart() {
  //   var chartData = {
  //     labels: ["January", "February", "March", "April", "May", "June","july","August","Sep","Oct","Nov","Dec"],
  //     datasets: [{
  //         label: "Monthly Revenue",
  //         data: [1200, 1500, 1800, 2000, 2200, 2500, 2800, 3000, 3200, 3500, 3000, 2500],
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1
  //     }]
  // };

  // // Get the chart canvas element
  // var ctx = document.getElementById('myChart').getContext('2d');

  // // Create the chart
  // var myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: chartData,
  //     options: {
  //         scales: {
  //             y: {
  //                 beginAtZero: true
  //             }
  //         }
  //     }
  // });
}




