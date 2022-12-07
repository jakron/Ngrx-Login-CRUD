import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MovieModel, MovieRequiredProps } from "../../../shared/models";
import { Store } from "@ngrx/store";
import {
  selectActiveMovie,
  selectAllMovies,
  // selectBooksEarningsTotals,
  State,
} from "../../../shared/state";
import { MoviesPageActions } from "../../../movies/actions";

@Component({
  selector: "app-movies-page",
  templateUrl: "./movies-page.component.html",
  styleUrls: ["./movies-page.component.css"],
})
export class MoviesPageComponent implements OnInit {
  movies$: Observable<MovieModel[]>;
  currentMovie$: Observable<MovieModel | null>;
  // total$: Observable<number>;

  constructor(private store: Store<State>) {
    this.movies$ = store.select(selectAllMovies);
    this.currentMovie$ = store.select(selectActiveMovie);
    // this.total$ = store.select(selectBooksEarningsTotals);
  }

  ngOnInit() {
    this.store.dispatch(MoviesPageActions.enter());
  }

  onSelect(movie: MovieModel) {
    this.store.dispatch(MoviesPageActions.selectMovie({ movieId: movie.id }));
  }

  onCancel() {
    this.removeSelectedMovie();
  }

  removeSelectedMovie() {
    this.store.dispatch(MoviesPageActions.clearSelectedMovie());
  }

  onSave(movie: MovieRequiredProps | MovieModel) {
    if ("id" in movie) {
      this.updateMovie(movie);
    } else {
      this.saveMovie(movie);
    }
  }

  saveMovie(movieProps: MovieRequiredProps) {
    this.store.dispatch(MoviesPageActions.createMovie({ movie: movieProps }));
  }

  updateMovie(movie: MovieModel) {
    this.store.dispatch(
      MoviesPageActions.updateMovie({ movieId: movie.id, changes: movie })
    );
  }

  onDelete(movie: MovieModel) {
    this.store.dispatch(MoviesPageActions.deleteMovie({ movieId: movie.id }));
  }
}
