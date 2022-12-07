import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MovieModel } from "../../../shared/models";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"],
})
export class MovieDetailComponent {
  originalMovie: MovieModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  movieForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    earnings: new FormControl(0, [Validators.pattern("^[0-9]*$")]),
    description: new FormControl(""),
  });

  @Input() set movie(movie: MovieModel) {
    this.movieForm.reset();
    this.originalMovie = undefined;

    if (movie) {
      this.movieForm.setValue({
        name: movie.name,
        earnings: movie.earnings,
        description: movie.description,
      });

      this.originalMovie = movie;
    }
  }

  onSubmit(movie: MovieModel) {
    this.save.emit({ ...this.originalMovie, ...movie });
  }

  onCancel() {
    this.cancel.emit();
    this.movieForm.reset();
  }
}
