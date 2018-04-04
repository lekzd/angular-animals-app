import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ApiService} from '../api.service';

@Injectable()
export class GuideResolver implements Resolve<any> {

  constructor(private api: ApiService) {}

  resolve(): Observable<any> | Promise<any> | any {
    return this.api.getGuides();
  }
}
