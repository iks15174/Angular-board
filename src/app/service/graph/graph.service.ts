import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor() { }

  makeDataPostDate() {
    const postList = JSON.parse(localStorage.getItem("postList") || "[]");
    let result = [];
    let returnResult = [];
    for (let i in postList) {
      result.push(
        [
          postList[i].created,
          postList[i].postId
        ]
      );
    }
    result.sort(function (a, b) {
      let temA: string = a[0].toString();
      let temB: string = b[0].toString();
      if (temA < temB) {
        return -1;
      }
      if (temA > temB) {
        return 1;
      }
      return 0;
    })
    for (let i in result) {
      if (Number(i) === 0) {
        returnResult.push([result[i][0], 1])
      }
      else {
        if (result[i][0] === result[Number(i) - 1][0]) {
          returnResult[returnResult.length - 1][1] = Number(returnResult[returnResult.length - 1][1]) + 1;
        }
        else {
          returnResult.push([result[i][0], 1]);
        }
      }
    }
    return returnResult;
  }

  makeDataCalPostPerUser() {
    const postList = JSON.parse(localStorage.getItem("postList") || "[]");
    const userList = JSON.parse(localStorage.getItem("userList") || "[]");
    let result = [];
    for (let i in userList) {
      let value = 0;
      for (let j in postList) {
        if (postList[j].user.id === userList[i].id) {
          value++;
        }
      }
      result.push({ value: value, name: userList[i].name });
    }
    return result;
  }

  makeDataUserPostDate() {
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
      dataOfSeries.sort(function (a, b) {
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
