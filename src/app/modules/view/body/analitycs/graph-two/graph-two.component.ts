import { Component } from '@angular/core';

@Component({
  selector: 'app-graph-two',
  templateUrl: './graph-two.component.html',
  styleUrls: ['./graph-two.component.css']
})
export class GraphTwoComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data = {
        labels: ['6 PM', '9 PM', 'Mayo 20', '3 AM', '6 AM', '9 AM', '12 PM', '3 PM'],
        datasets: [
            {
                type: 'scatter',
                label: 'Dataset 1',
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                data: [{
                  x: -10,
                  y: 0
                }, {
                  x: 0,
                  y: 10
                }, {
                  x: 10,
                  y: 5
                }, {
                  x: 0.5,
                  y: 5.5
                }]
            }
        ]
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
