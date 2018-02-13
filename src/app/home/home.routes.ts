import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { DetailsComponent } from '../details/details.component';

export const HomeRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'pages/:currentPage',  component: HomeComponent },
  {path: 'pages/:currentPage/details/:id', component: DetailsComponent}
];
