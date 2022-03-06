export interface RedditResponse {
  data: ResponseDataObj;
}

export class ResponseDataObj {
  after: string = "";
  before: string = "";
  children: SubReddit[] = [];
}

export class SubReddit {
  data: SubRedditData = new SubRedditData();
}

export class SubRedditData {
  title: string = "";
  name: string = "";
  subreddit_type: string = "";
  url: string = "";
}
