import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IGuide} from "../api.service";

@Component({
  selector: 'app-guide-page',
  templateUrl: './guide-page.component.html',
  styleUrls: ['./guide-page.component.css']
})
export class GuidePageComponent implements OnInit {

  get page(): IGuide {
    const {params, parent} = this.route.snapshot;

    return parent.data.guides[parseInt(params.id, 10)];
  }

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const {params} = this.route.snapshot;

    if (!this.hasGuide(params.id)) {
      this.router.navigateByUrl('/guide/0');
    }
  }

  next() {
    const {params} = this.route.snapshot;
    const nextIndex = parseInt(params.id, 10) + 1;

    this.router.navigateByUrl(`/guide/${nextIndex}`);
  }

  hasGuide(id: string): boolean {
    return !!this.route.snapshot.parent.data.guides[parseInt(id, 10)];
  }

}
