import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-post-date',
  templateUrl: './post-date.component.html',
  styleUrls: ['./post-date.component.css']
})
export class PostDateComponent implements OnInit, DoCheck {

  option: any;

  constructor(
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
    const postList = JSON.parse(localStorage.getItem("postList") || "[]");
    let result = [];
    let returnResult = [];
    for(let i in postList){
      result.push(
        [
          postList[i].created,
          postList[i].postId
        ]
      );
    }
    result.sort(function(a, b){
      let temA: string = a[0].toString();
      let temB: string = b[0].toString();
      if(temA < temB){
        return -1;
      }
      if(temA > temB){
        return 1;
      }
      return 0;
    })
    for(let i in result){
      if(Number(i) === 0){
        returnResult.push([result[i][0], 1])
      }
      else{
        if(result[i][0] === result[Number(i)-1][0]){
          returnResult[returnResult.length-1][1] = Number(returnResult[returnResult.length-1][1]) + 1; 
        }
        else{
          returnResult.push([result[i][0], 1]);
        }
      }
    }
    return returnResult;
  }
}
