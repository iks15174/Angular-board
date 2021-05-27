import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-user-post-date',
  templateUrl: './user-post-date.component.html',
  styleUrls: ['./user-post-date.component.css']
})
export class UserPostDateComponent implements OnInit, DoCheck {

  option: any;

  constructor() { }

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
      series: this.makeData()
    }
  }

  makeData() {
    const postList = JSON.parse(localStorage.getItem("postList") || "[]");
    const userList = JSON.parse(localStorage.getItem("userList") || "[]");
    let dateSet = new Set<Date>();
    let returnSeries = [];
    for (let i in postList) {
      if (!dateSet.has(postList[i].created)) {
        dateSet.add(postList[i].created);
      }
    }

    for (let i in userList) {
      let dataOfSeries = [];
      for (let item of dateSet) {
        dataOfSeries.push([item, 0]);
      }
      dataOfSeries.sort(function(a, b){
        let tempA = new Date(a[0]);
        let tempB = new Date(b[0]);
        return tempA.getTime() - tempB.getTime();
      })
      for (let j in postList) {
        if (postList[j].user.id === userList[i].id) {
          for (let k in dataOfSeries) {
            if (dataOfSeries[k][0] === postList[j].created) {
              dataOfSeries[k][1] = Number(dataOfSeries[k][1]) + 1;
            }
          }
        }
      }
      let seriesObject = {
        name: userList[i].name,
        type: 'line',
        stack: true,
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: dataOfSeries
      }
      returnSeries.push(seriesObject);
    }
    return returnSeries;
  }

}
