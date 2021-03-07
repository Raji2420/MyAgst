import { Component } from "@angular/core";
import { ngOnInit } from "@angular/core";
import { Subscription, interval, Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements ngOnInit {
  title = "myApp";
  public subs: Subscription;
  public first: Observable<any>;

  ngOnInit() {
    // this.subs = interval(100).subscribe((data) => {
    //   data++;
    //   console.log("Data" + data);
    // });
    // console.log("Hi");
    this.first = Observable.create((observer) => {
      let i = 1;
      setInterval(() => {
        observer.next(i);
        if (i >= 10) {
          observer.complete();
        } else {
          i++;
        }
      }, 1000);
    });
    this.subs = this.first.subscribe((data) => {
      console.log(data);
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
