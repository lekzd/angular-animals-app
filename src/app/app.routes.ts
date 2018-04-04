import {Route} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {GuideComponent} from './guide/guide.component';
import {IndexGuard} from './index.guard';
import {GuideGuard} from './guide.guard';
import {GuideResolver} from './guide/guide.resover';
import {AnimalsResolver} from './index/animals.resover';
import {GlassesResolver} from './index/glasses.resover';

export const appRoutes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [IndexGuard],
    resolve: {
      animals: AnimalsResolver,
      glasses: GlassesResolver
    },
  },
  {
    path: 'guide',
    component: GuideComponent,
    resolve: {
      guides: GuideResolver
    },
    canDeactivate: [GuideGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
