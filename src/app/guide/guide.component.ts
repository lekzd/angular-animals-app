import {Component, OnInit} from '@angular/core';
import {ApiService, IGuide} from "../api.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  get guides(): IGuide[] {
    return this.route.snapshot.data.guides;
  }

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
