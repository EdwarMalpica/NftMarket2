import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-one',
  templateUrl: './graph-one.component.html',
  styleUrls: ['./graph-one.component.css']
})
export class GraphOneComponent implements OnInit{

  data: any;
  @Input()dataSet:any;
  options: any;

  constructor(){

  }

  ngOnInit() {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: Object.keys(this.dataSet).reverse(),
      datasets: [
        {
          type: 'line',
          label: 'Precio',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [0.10, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
        },
        {
          type: 'bar',
          label: 'Volumen',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          data: Object.values(this.dataSet).reverse(),
          borderColor: 'white',
          borderWidth: 2,
        },
      ],
    };

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
  }
}
