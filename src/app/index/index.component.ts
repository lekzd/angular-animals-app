import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAnimal, IGlass} from "../api.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  animal: IAnimal;
  glasses: IGlass;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const {animal, glasses} = this.route.snapshot.queryParams;

    if (animal && glasses) {
      this.animal = this.getAnimal(parseInt(animal, 10));
      this.glasses = this.getGlasses(parseInt(glasses, 10));

      return;
    }

    this.refresh();
  }

  refresh() {
    this.animal = this.getRandomAnimal();
    this.glasses = this.getRandomGlass();

    this.router.navigateByUrl(`?animal=${this.animal.id}&glasses=${this.glasses.id}`);
  }

  private getRandomAnimal(): IAnimal {
    const {animals} = this.route.snapshot.data;
    const index = Math.floor(Math.random() * animals.length);

    return animals[index];
  }

  private getRandomGlass(): IGlass {
    const {glasses} = this.route.snapshot.data;
    const index = Math.floor(Math.random() * glasses.length);

    return glasses[index];
  }

  private getAnimal(id: number): IAnimal {
    const {animals} = this.route.snapshot.data;

    return animals.find(animal => animal.id === id);
  }

  private getGlasses(id: number): IGlass {
    const {glasses} = this.route.snapshot.data;

    return glasses.findIndex(animal => animal.id === id);
  }

}
