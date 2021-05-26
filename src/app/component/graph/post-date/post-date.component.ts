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

  option: any;

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
        data: this.makeData(),
      }]
    };
  }

  makeData(){
    const postList = this.boardService.postList;
    let result = [];
    for(let i in postList){
      result.push(
        [
          postList[i].created,
          postList[i].postId
        ]
      );
    }
    console.log(result);
    return result;
  }
}
