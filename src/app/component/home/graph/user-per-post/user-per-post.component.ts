import { Component, OnInit, DoCheck } from '@angular/core';
import { EChartsOption } from 'echarts';
import { UserlistService } from 'src/app/service/member/userlist.service';
import { BoardService } from 'src/app/service/rest-api/board.service';
import { GraphService } from 'src/app/service/graph/graph.service';

@Component({
  selector: 'app-user-per-post',
  templateUrl: './user-per-post.component.html',
  styleUrls: ['./user-per-post.component.css']
})
export class UserPerPostComponent implements OnInit, DoCheck {

  option: EChartsOption;

  constructor(
    private boardService: BoardService,
    private userListService: UserlistService,
    private graphService: GraphService

  ) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.option = {
      title: {
        text: '유저당 게시글 작성 수',
        subtext: 'POST PER USER',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: '그래프',
          type: 'pie',
          radius: '50%',
          data: this.graphService.makeDataCalPostPerUser(),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }
}
