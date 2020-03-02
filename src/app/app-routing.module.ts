import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { NgxStoreComponent } from './ngx-store/ngx-store.component';


const routes: Routes = [
  {path: "merge-map", component: MergeMapComponent},
  {path: "concat-map", component: ConcatMapComponent},
  {path: "ngx-store", component: NgxStoreComponent},
  {path:'', redirectTo: 'merge-map', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
