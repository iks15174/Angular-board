import { Component, OnInit, DoCheck } from '@angular/core';
import { GraphService } from 'src/app/service/graph/graph.service';


@Component({
  selector: 'app-user-post-date',
  templateUrl: './user-post-date.component.html',
  styleUrls: ['./user-post-date.component.css']
})
export class UserPostDateComponent implements OnInit, DoCheck {

  option: any;

  constructor(
    private graphService: GraphService
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.option = {
      title: {
        text: 'POST-USER-DATE'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'time',
          boundaryGap: false,
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: this.graphService.makeDataUserPostDate()
    }
  }
}
