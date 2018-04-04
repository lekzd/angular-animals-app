import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IndexGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isGuideSeen = !!localStorage['guide'];

    if (isGuideSeen) {
      return true;
    }

    this.router.navigateByUrl('/guide/0');

    return false;
  }
}
