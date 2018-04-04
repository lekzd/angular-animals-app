import {Route} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {GuideComponent} from './guide/guide.component';
import {IndexGuard} from './index.guard';
import {GuideGuard} from './guide.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [IndexGuard]
  },
  {
    path: 'guide',
    component: GuideComponent,
    canDeactivate: [GuideGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
