import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/component/to-do.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

import { StoreModule } from '@ngrx/store'
import { ToDoReducer } from './to-do/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './to-do/todo.effects';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { NgxStoreComponent } from './ngx-store/ngx-store.component';
import { RxFirstComponent } from './rx-first/rx-first.component';
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    AutoCompleteComponent,
    MergeMapComponent,
    ConcatMapComponent,
    NgxStoreComponent,
    RxFirstComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    StoreModule.forRoot({ todos: ToDoReducer }),
    EffectsModule.forRoot([ToDoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
