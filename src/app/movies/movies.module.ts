import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { MoviesPageComponent } from "./components/movies-page/movies-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { MoviesApiEffects } from "./movies-api.effects";

@NgModule({
  declarations: [
    MovieDetailComponent,
    MoviesListComponent,
    MoviesPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{ path: "movies", component: MoviesPageComponent }]),
    EffectsModule.forFeature([MoviesApiEffects]),
  ],
})
export class MoviesModule {}
