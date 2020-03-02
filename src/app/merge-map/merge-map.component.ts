import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {ApiService } from '../api.service';
import { fromEvent, from } from 'rxjs';
import { tap, map, mergeMap, mergeAll, flatMap } from 'rxjs/operators';
interface Student {
  id: number;
  name: string;
  subjects?: any
}
@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.sass']
})
export class MergeMapComponent implements OnInit {
  public students: Array<Student> = [];
  public totalStudents: number = 0;
  public student: Student;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  
  getAllStudents() {
    this.apiService.get('http://localhost:8081/students').pipe(      
      flatMap(resp => {
        return this.apiService.get(`http://localhost:8081/students/count`).pipe(
          map(countResp => {           
            // resp['data']['totalRecords'] = resp['data']['totalRecords'];
            return {
              rows: resp['data'],
              totalRecords: countResp['data']['totalRecords']
            }
          })
        )
      })
    )
    .subscribe(resp => {
      console.log('in Subscription', resp)
      this.students       = resp['rows'];
      this.totalStudents  = resp['totalRecords'];
    });
  }

  getOneStudent(id:number = 1) {
    this.apiService.get(`http://localhost:8081/students/student/${id}`).pipe(
      map(resp => {
        return resp['data']
      }),
      mergeMap(param => {
        const studentId = param['id'];
        return this.apiService.get(`http://localhost:8081/students/subjects/${studentId}`).pipe(
          map(resp => {
            param['subjects'] = resp['data']['rows'];
            return param;
          })
        )
      })
    ).subscribe((resp) =>{
      console.log('Subscription called', resp)
      this.student = resp;
    })
  }

  // test map & mergeAll
  testMergeAll() {
    from([1,2,3,4]).pipe(
      mergeMap(id => {
        return this.apiService.get(`http://localhost:8081/students/student/${id}`)
      }),
      mergeAll()
    ).subscribe(val => console.log(val));
  }

}





































//https://stackblitz.com/edit/observable-mergemap
// import { of, from } from 'rxjs'; 
// import { map, mergeMap, delay, mergeAll } from 'rxjs/operators';

// const getData = (param) => {
//   console.log('A', param)
//   return of(`retrieved new data with param ${param}`).pipe(
//     delay(1000)
//   )
// }

// // using a regular map
// // from([1,2,3,4]).pipe(
// //   map(param => getData(param))
// // ).subscribe(val => val.subscribe(data => console.log(data)));

// // using map and mergeAll
// // from([1,2,3,4]).pipe(
// //   map(param => getData(param)),
// //   mergeAll()
// // ).subscribe(val => console.log(val));

// // using mergeMap
// from([1,2,3,4]).pipe(
//   mergeMap(param => {
//     console.log('B', param)
//     return of(`retrieved new data with param ${param}`).pipe(
//     delay(1000)
//   )
//   })
// ).subscribe(val => console.log(val));
