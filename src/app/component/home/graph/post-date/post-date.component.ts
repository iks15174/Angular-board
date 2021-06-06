import { Component, OnInit, DoCheck } from '@angular/core';
import { GraphService } from 'src/app/service/graph/graph.service';

@Component({
  selector: 'app-post-date',
  templateUrl: './post-date.component.html',
  styleUrls: ['./post-date.component.css']
})
export class PostDateComponent implements OnInit, DoCheck {

  option: any;

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.option = {
      title: {
        text: 'Post With User'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: 'series',
        type: 'line',
        hoverAnimation: true,
        data: this.graphService.makeDataPostDate(),
      }]
    };
  }
}
