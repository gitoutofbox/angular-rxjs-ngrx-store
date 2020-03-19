import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { concatMap, tap, mergeMap } from 'rxjs/operators';
import { from, forkJoin } from 'rxjs';
//https://stackblitz.com/edit/concatmap-example
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-mergemap-vs-concatmap',
  templateUrl: './mergemap-vs-concatmap.component.html',
  styleUrls: ['./mergemap-vs-concatmap.component.sass']
})
export class MergemapVsConcatmapComponent implements OnInit {

  constructor(private apiService: ApiService, private userService: UserService) { }

  ngOnInit(): void {
    this.stack();
  }


  stack() {
    
    from([
      this.apiService.get('http://localhost:8081/concatmap/userlist/5sec'),
      this.apiService.get('http://localhost:8081/concatmap/products/3sec'),
      this.apiService.get('http://localhost:8081/concatmap/news/1sec')
    ])
      .pipe(
        mergeMap(x => x)
      )
      .subscribe(resp => {
        console.log('rep', resp)
      })
  }

}
