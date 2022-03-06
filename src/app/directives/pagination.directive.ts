import { Directive, ElementRef, HostListener } from "@angular/core";
import { RedditService } from "../services/reddit.service";

@Directive({
  selector: "[nsPagination]",
})
export class PaginationDirective {
  constructor(private elemRef: ElementRef, private redditService: RedditService) {}

  @HostListener("scroll")
  onScroll() {
    const div = this.elemRef.nativeElement;
    if (div.scrollTop + div.clientHeight >= div.scrollHeight - 5)
      this.redditService.setScrollSub(true);
  }
}
