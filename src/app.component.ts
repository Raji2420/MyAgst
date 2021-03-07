import { Component } from "@angular/core";
import { ngOnInit } from "@angular/core";
import { Subscription, Observable } from "rxjs";

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

    this.subs = Observable.create((data) => {
      let i = 0;
      data.next(i);
      console.log(data);
      i++;
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
