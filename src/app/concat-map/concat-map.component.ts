import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { concatMap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.sass']
})
export class ConcatMapComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    //https://medium.com/angular-in-depth/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293
    // this.apiService.get('http://localhost:8081/concatmap/userlist/1').subscribe(resp => {
    //   console.log(resp);
    // })  
    // this.apiService.get('http://localhost:8081/concatmap/products/2').subscribe(resp => {
    //   console.log(resp);
    // }) 
    // this.apiService.get('http://localhost:8081/concatmap/news/3').subscribe(resp => {
    //   console.log(resp);
    // })   


    // this.stack()
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