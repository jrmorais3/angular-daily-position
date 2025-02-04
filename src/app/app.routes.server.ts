import { Route, Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  }
]

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
