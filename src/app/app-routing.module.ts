import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAppComponent } from './pages/home-app/home-app.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProfileComponent } from './children/user/pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeAppComponent},
  { path: 'converter', loadChildren: () => import('./children/convertations/convertations.module').then(m => m.ConvertationsModule)},
  { path: 'profile', loadChildren: () => import('./children/user/user.module').then(m => m.UserModule)},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
