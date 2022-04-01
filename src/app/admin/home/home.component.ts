import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.myChart = new Chart('myChart', this.data);
    this.addData();
    this.removeData();
    console.log(this.data);
  }
  myChart;
  data: any = {
    type: 'line',
    data: {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Juni', 'Juli'],
      datasets: [
        {
          label: 'Requests',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  addData() {
    window.setInterval(() => {
      const rndInt = Math.floor(Math.random() * 100) + 1;
      const randomTime = Date.now().toString(10).substring(7);
      this.data.data.datasets.forEach((val) => {
        val.data.push(rndInt);
        console.log(rndInt);
        
      });
      this.data.data.labels.push(randomTime)
      this.myChart.update();
    }, 3000);

    
  }
  updateData() {}

  removeData() {
    window.setInterval(() => {
      this.data.data.labels.shift();
      this.data.data.datasets.forEach((datasets) => {
        datasets.data.shift();
      });
      this.myChart.update();
    }, 5000);
  }
}
