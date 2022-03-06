import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, map, Observable, Subject } from "rxjs";
import { ResponseDataObj, RedditResponse } from "../interfaces/reddit-response";

@Injectable({
  providedIn: "root",
})
export class RedditService {
  private scrollSub = new Subject<boolean>();

  constructor(private httpClient: HttpClient) {}

  setScrollSub(value: boolean) {
    this.scrollSub.next(value);
  }

  isScrollToDown(): Observable<boolean> {
    return this.scrollSub.asObservable();
  }

  getAfter(after: string | undefined): string {
    return after ? `&after=${after}` : "";
  }

  async getReddit(limit: number = 25, after: string | undefined): Promise<ResponseDataObj> {
    const url = `https://www.reddit.com/r/askreddit/.json?limit=${limit}${this.getAfter(after)}`;
    return lastValueFrom(
      this.httpClient.get<RedditResponse>(url).pipe(map((response) => response.data))
    );

    //map((data) => {
    //   var posts: Post[] = [];
    //   let children = data.json().data.children;
    //   for (var i = 0; i < children.length; i++) {
    //     let post: Post = new Post();
    //     post.title = children[i].data.title;
    //     post.url = children[i].data.url;
    //     posts.push(post);
    //   }
    //   return posts;
    // });
  }
}
