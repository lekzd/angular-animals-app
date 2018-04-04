import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ApiService, IAnimal} from '../api.service';

@Injectable()
export class AnimalsResolver implements Resolve<IAnimal[]> {

  constructor(private api: ApiService) {}

  resolve(): Observable<IAnimal[]> {
    return this.api.getAnimals();
  }
}
