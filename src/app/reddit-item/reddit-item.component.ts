import { Component, Input, OnInit } from "@angular/core";
import { SubRedditData } from "../interfaces/reddit-response";

@Component({
  selector: "[ns-reddit-item]",
  templateUrl: "./reddit-item.component.html",
  styleUrls: ["./reddit-item.component.css"],
})
export class RedditItemComponent implements OnInit {
  @Input("ns-reddit-item") subRedditData: SubRedditData | undefined;

  constructor() {}

  ngOnInit(): void {}
}
