import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { RedditListContainerComponent } from "./reddit-list-container/reddit-list-container.component";
import { PaginationDirective } from "./directives/pagination.directive";
import { RedditItemComponent } from './reddit-item/reddit-item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, RedditListContainerComponent, PaginationDirective, RedditItemComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
