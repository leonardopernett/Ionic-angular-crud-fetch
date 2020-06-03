import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    children:[
      {
        path:"",
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path:"details/:id",
        loadChildren: () => import('./places/details/details.module').then(m=>m.DetailsPageModule)
      },
      {
        path:"add",
        loadChildren: ()=> import ('./places/add/add.module').then(m => m.AddPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
