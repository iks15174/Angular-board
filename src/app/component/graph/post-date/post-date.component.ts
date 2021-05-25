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

}
