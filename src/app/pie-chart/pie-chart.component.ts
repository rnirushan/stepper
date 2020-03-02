import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsService } from '../highcharts.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @ViewChild('charts') public chartEl: ElementRef;
  options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Registered users\' countries, 2020'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
    series: [{
      name: 'Countries',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Sri Lanka',
        y: 11.84
      }, {
        name: 'India',
        y: 10.85
      }, {
        name: 'Singapore',
        y: 4.67
      }, {
        name: 'Malasia',
        y: 4.18
      }, {
        name: 'China',
        y: 1.64
      }, {
        name: 'hong kong',
        y: 1.6
      }, {
        name: 'Australia',
        y: 1.2
      }, {
        name: 'Other',
        y: 2.61
      }]
    }]
  };

  constructor(private readonly highchartsService: HighchartsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.highchartsService.createChart(this.chartEl.nativeElement, this.options);
  }
}
