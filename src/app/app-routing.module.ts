import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'view-user', pathMatch: 'full' },
  { path: 'view-user', component: UserListComponent },
  { path: 'view-user/add-user', component: AddUserComponent },
  {path: 'view-user/edit-user/:id', component: UpdateUserComponent},
  {path:'view-user/:id', component: UserListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
