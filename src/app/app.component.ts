import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "NgRx Workshop";
  links = [
    { path: "/books", icon: "book", label: "Books" },
    { path: "/movies", icon: "movie", label: "Movies" },
    { path: "/music", icon: "library_music", label: "Music" },
  ];
}
