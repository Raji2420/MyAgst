import { Component } from "@angular/core";
import { ngOnInit } from "@angular/core";
import { Subscription, interval } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements ngOnInit {
  title = "myApp";
  public subs: Subscription;

  ngOnInit() {
    // this.subs = interval(100).subscribe((data) => {
    //   data++;
    //   console.log("Data" + data);
    // });
    // console.log("Hi");
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
