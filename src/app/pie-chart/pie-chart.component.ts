import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Luminar Technolab',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    credits:{
      enabled:false
    },
    series: [{
        name: 'Courses',
        colorByPoint: true,
        data: [{
            name: 'MEARN STACK',
            y: 70.67,
            sliced: true,
            selected: true
        }, {
            name: 'PYTHON',
            y: 25.77
        },  {
            name: '.NET',
            y: 14.86
        }, {
            name: 'TESTING',
            y: 5.63
        }, {
            name: 'BIG DATA',
            y: 8.53
        }, 
        {
          name:'FLUTTER',
          y:15.45 
        },
        {
          name:'JAVA',
          y:15.25
        }
      ]
    }]
    }
  }

}
