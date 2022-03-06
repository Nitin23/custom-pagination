import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { ResponseDataObj } from "../interfaces/reddit-response";
import { RedditService } from "../services/reddit.service";

@Component({
  selector: "ns-reddit-list-container",
  templateUrl: "./reddit-list-container.component.html",
  styleUrls: ["./reddit-list-container.component.css"],
})
export class RedditListContainerComponent implements OnInit {
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
  }

  private async checkNextRedditDataLoad() {
    this.redditService.isScrollToDown().subscribe((isScrolledDown) => {
      if (isScrolledDown) this.getPaginatedRedditData();
    });
  }
}
