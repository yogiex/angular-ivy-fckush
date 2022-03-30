import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
