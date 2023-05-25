import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graph-three',
  templateUrl: './graph-three.component.html',
  styleUrls: ['./graph-three.component.css']
})
export class GraphThreeComponent {
  data: any;
  @Input() dataset:any;
  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
        labels: this.dataset
          .map((a) => a.address)
          .map((a) => `${a.substring(0, 5)}...${a.substring(a.length - 5)}`),
        datasets: [
          {
            label: 'Owners',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: this.dataset.map((a) => a.tokens),
          },
        ],
      };

      this.options = {
          indexAxis: 'y',
          maintainAspectRatio: false,
          aspectRatio: 0.8,
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
                      color: textColorSecondary,
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }
}
