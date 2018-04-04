import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

interface IGuide {
  id: number;
  title: string;
  description: string;
  img: string;
}

interface IAnimal {
  id: number;
  title: string;
  description: string;
  img: string;
}

interface IGlass {
  id: number;
  img: string;
}

const url = 'http://localhost:3000';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  getGuides(): Observable<IGuide> {
    return this.http.get<IGuide>(`${url}/guide`);
  }

  getAnimals(): Observable<IAnimal> {
    return this.http.get<IAnimal>(`${url}/animals`);
  }

  getGlasses(): Observable<IGlass> {
    return this.http.get<IGlass>(`${url}/glasses`);
  }

}
