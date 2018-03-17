import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';

// adding router for HomeComponent and FavouriteMoviesComponent
const routes :Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'favourite', component:FavouriteMoviesComponent },
];

// import RouterModule and route and routes

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
