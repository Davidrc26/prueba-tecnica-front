import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCartoonsComponent } from './list-cartoons/list-cartoons.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-cartoons',
    pathMatch: 'full'
  },
  {
    path:'list-cartoons',
    component: ListCartoonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
