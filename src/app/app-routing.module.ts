import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridPerformanceSampleComponent } from './grid-performance-sample/grid-performance-sample.component';

const routes: Routes = [{
  path: 'gridPerformance',
  component: GridPerformanceSampleComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
