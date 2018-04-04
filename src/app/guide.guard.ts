import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {CanDeactivate} from '@angular/router';
import {GuideComponent} from './guide/guide.component';

@Injectable()
export class GuideGuard implements CanDeactivate<GuideComponent> {

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

    localStorage.setItem('guide', 'true');

    return true;
  }
}
