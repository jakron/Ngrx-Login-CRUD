import { createAction, props } from "@ngrx/store";
import { MovieRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Books Page] Enter");

export const selectMovie = createAction(
  "[Movies Page] Select Movie",
  props<{ movieId: string }>()
);

export const clearSelectedMovie = createAction(
  "[Movies Page] Clear Selected Movie"
);

export const createMovie = createAction(
  "[Movies Page] Create Movie",
  props<{ movie: MovieRequiredProps }>()
);

export const updateMovie = createAction(
  "[Movies Page] Update Movie",
  props<{ movieId: string; changes: MovieRequiredProps }>()
);

export const deleteMovie = createAction(
  "[Movies Page] Delete Movie",
  props<{ movieId: string }>()
);
