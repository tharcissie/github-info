import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';


const routes: Routes = [
  {path:"user-profile", component:UserComponent},
  {path:"search-repo", component:RepoComponent},
  {path: "", redirectTo:"/user-profile", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
