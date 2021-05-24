import { Component, DoCheck, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { UserlistService } from 'src/app/service/member/userlist.service';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit, DoCheck {

  option: EChartsOption;

  constructor(
    private boardService: BoardService,
    private userListService: UserlistService
  ) {
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngDoCheck() {
    this.option = {
      xAxis: {
        type: 'category',
        data: ['USER', 'POST']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [this.userListService.userList.length, this.boardService.postList.length],
        type: 'bar'
      }]
    }
  }

}
