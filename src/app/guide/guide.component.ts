import {Component, OnInit} from "@angular/core";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(private api: ApiService) {}

  ngOnInit() {
    console.log('api', this.api);

    this.api.getGuides().subscribe(items => {
      console.log('items', items);
    });
  }

}
