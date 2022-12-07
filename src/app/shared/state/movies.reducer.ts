import { createReducer, on, Action, createSelector } from "@ngrx/store";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { MovieModel } from "src/app/shared/models";
import { MoviesPageActions, MoviesApiActions } from "src/app/movies/actions";

export interface State extends EntityState<MovieModel> {
    activeMovieId: string | null;
}

export const adapter = createEntityAdapter<MovieModel>();

export const initialState: State = adapter.getInitialState({
    activeMovieId: null
});

export const moviesReducer = createReducer(
    initialState,
    on(MoviesPageActions.clearSelectedMovie, MoviesPageActions.enter, state => {
        return {
            ...state,
            activeMovieId: null
        };
    }),
    on(MoviesPageActions.selectMovie, (state, action) => {
        return {
            ...state,
            activeMovieId: action.movieId
        };
    }),
    on(MoviesApiActions.moviesLoaded, (state, action) => {
        return adapter.addMany(action.movies, state);
    }),
    on(MoviesApiActions.movieCreated, (state, action) => {
        return adapter.addOne(action.movie, {
            ...state,
            activeMovieId: null
        });
    }),
    on(MoviesApiActions.movieUpdated, (state, action) => {
        return adapter.updateOne(
            { id: action.movie.id, changes: action.movie },
            {
                ...state,
                activeMovieId: null
            }
        );
    }),
    on(MoviesApiActions.movieDeleted, (state, action) => {
        return adapter.removeOne(action.movieId, state);
    })
);

export function reducer(state: State | undefined, action: Action) {
    return moviesReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveMovieId = (state: State) => state.activeMovieId;
export const selectActiveMovie = createSelector(
    selectEntities,
    selectActiveMovieId,
    (moviesEntities, activeMovieId) => {
        return activeMovieId ? moviesEntities[activeMovieId]! : null;
    }
);
// export const selectEarningsTotals = createSelector(
//     selectAll,
//     calculateMoviesGrossEarnings
// );
