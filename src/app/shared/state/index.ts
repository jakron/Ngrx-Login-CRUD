import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import * as fromBooks from "./books.reducer";
import * as fromMovies from "./movies.reducer";
import { logoutMetareducer } from "./logout.metareducer";

export interface State {
  auth: fromAuth.State;
  books: fromBooks.State;
  movies: fromMovies.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  books: fromBooks.reducer,
  movies: fromMovies.reducer,
};

export const metaReducers: MetaReducer<State>[] = [logoutMetareducer];

/**
 * Auth Selectors
 */
export const selectAuthState = (state: State) => state.auth;
export const selectGettingAuthStatus = createSelector(
  selectAuthState,
  fromAuth.selectGettingStatus
);
export const selectAuthUser = createSelector(
  selectAuthState,
  fromAuth.selectUser
);
export const selectAuthError = createSelector(
  selectAuthState,
  fromAuth.selectError
);

/**
 * Book Selectors
 */
export const selectBooksState = (state: State) => state.books;
export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAll
);
export const selectActiveBook = createSelector(
  selectBooksState,
  fromBooks.selectActiveBook
);
export const selectBooksEarningsTotals = createSelector(
  selectBooksState,
  fromBooks.selectEarningsTotals
);

/**
 * Movie Selectors
 */
export const selectMoviesState = (state: State) => state.movies;
export const selectAllMovies = createSelector(
    selectMoviesState,
    fromMovies.selectAll
);
export const selectActiveMovie = createSelector(
    selectMoviesState,
    fromMovies.selectActiveMovie
);
// export const selectBooksEarningsTotals = createSelector(
//     selectBooksState,
//     fromBooks.selectEarningsTotals
// );
