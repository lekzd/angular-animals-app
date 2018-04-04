import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IAnimal, IGlass} from "../api.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  animal: IAnimal;
  glasses: IGlass;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.animal = this.getRandomAnimal();
    this.glasses = this.getRandomGlass();
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

}
