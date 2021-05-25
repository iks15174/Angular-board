import { Component, OnInit, DoCheck } from '@angular/core';
import { EChartsOption } from 'echarts';
import { UserlistService } from 'src/app/service/member/userlist.service';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-post-date',
  templateUrl: './post-date.component.html',
  styleUrls: ['./post-date.component.css']
})
export class PostDateComponent implements OnInit, DoCheck {

  option: EChartsOption;

  constructor(
    private boardService: BoardService,
    private userListService: UserlistService
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
        formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
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
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
      }]
    };
  }

}
