import { Component } from "@angular/core";

@Component({
  selector: "ns-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "NS Custom Pagination";
  // TODO: We can take limit from the config
  limit = 25;
}
