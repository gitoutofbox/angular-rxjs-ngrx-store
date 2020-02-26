import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, map,filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.sass']
})
export class AutoCompleteComponent implements OnInit {
  public autoCompleteUpdate = new Subject<string>();
  public autoCompleteNgModel: string = '';
  public _filteredData: any;
  public items: Array<any> = [];
  public apiInProgress: boolean = false;
  
  set filteredData(item:any) {
    this._filteredData = item;
    this.autoCompleteNgModel = item.value.filterValue;
}

  
  constructor(private apiService: ApiService) {}

  
  ngOnInit() {
    this.autoCompleteUpdate.pipe(
      tap(data => console.log('tap at begening data', data)),
      // map((data) => data = data + 'XXXXXXX'),  
     
      debounceTime(500),
      distinctUntilChanged(), 
      tap(data => {console.log('tap data', data)}),
      switchMap(value => {
        this.apiInProgress = true;        
        return this.apiService.get(`http://localhost:8081/email/get/${value}`) } )
    )
    .subscribe(resp => {
        this.items = resp['data'];
        this.apiInProgress = false;
      })
  }

  selectItem(item: Object) {
    this._filteredData.value.value = item;
    this.autoCompleteNgModel = item['user_email'];
    this.items = [];
  }

}
