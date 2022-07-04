import { Component, OnInit ,ViewChild} from '@angular/core';
// import { ChartDataSets, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      
      data: {
          datasets: [{
            label: 'Looping tension',
            data: [65, 59, 80, 81, 26, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
        }],
           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      },
  }
  
  );


  }

  // lineChartData: ChartDataSets[] = [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  // ];
  // lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  // lineChartOptions = {
  //   responsive: true,
  // };
  // lineChartColors: Color[] = [
  //   {
  //     borderColor: 'black',
  //     backgroundColor: 'rgba(255,255,0,0.28)',
  //   },
  // ];
  // lineChartLegend = true;
  // lineChartPlugins = [];
  // lineChartType = 'line';
  
}
  

// }
