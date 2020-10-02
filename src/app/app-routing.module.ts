import { GenerateOrderComponent } from './generate-order/generate-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'create',pathMatch: 'full'},
  { path: 'create', component: GenerateOrderComponent ,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
