import { Component, Input, OnInit } from "@angular/core";
import { ResponseDataObj } from "../interfaces/reddit-response";
import { RedditService } from "../services/reddit.service";

@Component({
  selector: "ns-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @Input() limit: number | undefined;

  redditResponse: ResponseDataObj;

  constructor(private redditService: RedditService) {
    this.redditResponse = new ResponseDataObj();
  }

  ngOnInit() {
    this.getPaginatedRedditData();
    this.checkNextRedditDataLoad();
  }

  async getPaginatedRedditData() {
    const redditRes = await this.redditService.getReddit(this.limit, this.redditResponse?.after);
    this.redditResponse.after = redditRes.after;
    this.redditResponse.children = [...this.redditResponse.children, ...redditRes.children];
    this.redditResponse = this.redditResponse;
  }

  private async checkNextRedditDataLoad() {
    this.redditService.isScrollToDown().subscribe((isScrolledDown) => {
      if (isScrolledDown) this.getPaginatedRedditData();
    });
  }
}
