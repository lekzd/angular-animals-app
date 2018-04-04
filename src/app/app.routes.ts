import {Route} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {GuideComponent} from './guide/guide.component';
import {IndexGuard} from './index.guard';
import {GuideGuard} from './guide.guard';
import {GuideResolver} from './guide/guide.resover';
import {AnimalsResolver} from './index/animals.resover';
import {GlassesResolver} from './index/glasses.resover';
import {GuidePageComponent} from "./guide-page/guide-page.component";

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
    canDeactivate: [GuideGuard],
    children: [
      {path: ':id', component: GuidePageComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
