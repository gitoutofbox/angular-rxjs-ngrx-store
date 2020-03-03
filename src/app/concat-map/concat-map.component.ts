import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { concatMap, tap } from 'rxjs/operators';
import { from, forkJoin } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.sass']
})
export class ConcatMapComponent implements OnInit {
  newsList: any = [];
  constructor(private apiService: ApiService, private userService: UserService) { }
  ngOnInit(): void {
    // this.stack()
    // this.testOne();
    this.testForkJoin();
    this.getUserConfig();
  }

  testForkJoin() {
    forkJoin([
      this.apiService.get('http://localhost:8081/user/getUserInfo').pipe(tap(res => console.log(res))),
      this.apiService.get('http://localhost:8081/user/getCommonSetting').pipe(tap(res => console.log(res))),
      this.apiService.get('http://localhost:8081/news').pipe(
        tap(res => {
          console.log(res); 
           
        }),
        
        )
    ]).subscribe(
      allResults => {
        console.log('all result', allResults);
        this.newsList = allResults[2];
        console.log(this.newsList)
      }
      );
  }
  
  testOne() {
    this.apiService.get('http://localhost:8081/concatmap/userlist/5sec').pipe(
      tap(res => {console.log('First result', res);}),
      concatMap(res => this.apiService.get('http://localhost:8081/concatmap/products/3sec')),
      tap(res => {console.log('Second result', res)}),
      concatMap(res => this.apiService.get('http://localhost:8081/concatmap/news/1sec')),
      tap(res => console.log('Third result', res)),
    ).subscribe(resp => {
      console.log('final resp', resp)
    })
  }

  getUserConfig() {
    this.apiService.get(`http://localhost:8081/user/getUserInfo`).pipe(
      tap(res => {
        console.log('First result', res);
        this.userService.setUserInfo(res['userName'])
      }),
      concatMap(res => this.apiService.get(`http://localhost:8081/user/getUserTheme/${res['userId']}`)),
      tap(res => {
        console.log('Second result', res)
        this.userService.setUserTheme({'bodyBgColor': res['bodyBgColor'], 'bgColor': res['headerBgColor'], 'color': res['headerColor']})
        
      }),
      concatMap(res => this.apiService.get(`http://localhost:8081/user/getUserGeoLocation/${res['location']}`)),
      tap(res => console.log('Third result', res)),
    ).subscribe(resp => {
      console.log('final resp', resp)
    })
  }


  stack() {
    //https://stackblitz.com/edit/concatmap-example
    from([
      this.apiService.get('http://localhost:8081/concatmap/userlist/1'),
      this.apiService.get('http://localhost:8081/concatmap/products/2'),
      this.apiService.get('http://localhost:8081/concatmap/news/3')
    ])
      .pipe(
        concatMap(x => x)
      )
      .subscribe(resp => {
        console.log('rep', resp)
      })
  }
}