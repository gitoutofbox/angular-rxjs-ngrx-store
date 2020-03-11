import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { tap, first, filter, map, take } from 'rxjs/operators';
import ToDo from '../to-do/todo.model';
import { fromEvent, of, from } from 'rxjs';


@Component({
  selector: 'app-rx-first',
  templateUrl: './rx-first.component.html',
  styleUrls: ['./rx-first.component.sass']
})
export class RxFirstComponent implements OnInit {
  @ViewChild('submitVote', {static: true}) submitVote: ElementRef;
  allTodos      : Array<ToDo> = [];
  filteredTodos : Array<ToDo> = [];
  choice        : string      = '';
  voteSubmitted : string       = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTodos();

    fromEvent(this.submitVote.nativeElement, 'click').pipe(
      // first()
      take(2)
    )
    .subscribe(resp => {
      console.log(`You selected: ${this.choice}`)
      this.saveVote();      
    })
  }

  saveVote() {
    this.apiService.post('http://localhost:8081/vote/save', {votefor: this.choice}).subscribe(resp => {
      this.voteSubmitted = this.choice;
    })
  }

  getTodos() {
    this.apiService.get('http://localhost:8081/todos/getToDos').pipe(      
      map(resp => resp['data']),    
    )
    .subscribe(resp =>{
      console.log('All result', resp)
      this.allTodos = resp;
      this.filterTodos();
    })
  }

  filterTodos() {
    this.filteredTodos = [];
    of(...this.allTodos).pipe(
      // first(resp => resp.isCompleted)
      take(4)
    )
    .subscribe(resp => {
     
      this.filteredTodos.push(resp);
    })
  }
}
