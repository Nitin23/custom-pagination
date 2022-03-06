import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from "@angular/core";
import { ResponseDataObj } from "../interfaces/reddit-response";
import { RedditService } from "../services/reddit.service";

@Component({
  selector: "ns-reddit-list-container",
  templateUrl: "./reddit-list-container.component.html",
  styleUrls: ["./reddit-list-container.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RedditListContainerComponent implements OnInit {
  @Input() responseDataObj: ResponseDataObj | undefined;

  constructor() {}

  ngOnInit(): void {}
}
