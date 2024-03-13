import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AustraliaComponent } from './australia/australia.component';
import { MalaysiaComponent } from './malaysia/malaysia.component';
const routes: Routes = [
  { path: '', component: MalaysiaComponent },
  { path: 'au', component: AustraliaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
