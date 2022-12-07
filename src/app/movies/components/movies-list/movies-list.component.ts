import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MovieModel } from "../../../shared/models";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.css"],
})
export class MoviesListComponent {
  @Input() movies: MovieModel[];
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
}
