import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ApiService, IGlass} from '../api.service';

@Injectable()
export class GlassesResolver implements Resolve<IGlass[]> {

  constructor(private api: ApiService) {}

  resolve(): Observable<IGlass[]> {
    return this.api.getGlasses();
  }
}
