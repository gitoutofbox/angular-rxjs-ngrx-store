import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { NgxStoreComponent } from './ngx-store/ngx-store.component';
import { RxFirstComponent } from './rx-first/rx-first.component';
import { MergemapVsConcatmapComponent } from './mergemap-vs-concatmap/mergemap-vs-concatmap.component';


const routes: Routes = [
  {path: "merge-map", component: MergeMapComponent},
  {path: "concat-map", component: ConcatMapComponent},
  {path: "rx-first", component: RxFirstComponent},
  {path: "concatmap-vs-mergemap", component: MergemapVsConcatmapComponent},
  {path: "ngx-store", component: NgxStoreComponent},
  {path:'', redirectTo: 'merge-map', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
