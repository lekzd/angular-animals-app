import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ApiService, IGuide} from '../api.service';

@Injectable()
export class GuideResolver implements Resolve<IGuide[]> {

  constructor(private api: ApiService) {}

  resolve(): Observable<IGuide[]> {
    return this.api.getGuides();
  }
}
