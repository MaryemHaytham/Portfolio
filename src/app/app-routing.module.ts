import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'Home',pathMatch:'full'},
  { path: 'Home', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
