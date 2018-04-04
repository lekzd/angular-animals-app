import {Component, OnInit} from "@angular/core";
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('data', this.route.snapshot.data);
  }

}
