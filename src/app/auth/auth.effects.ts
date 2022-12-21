import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, tap } from "rxjs/operators";
import { AuthService } from "../shared/services";
import { AuthApiActions, AuthUserActions } from "./actions";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private auth: AuthService
  ) {}

  getAuthStatus$ = createEffect(() =>
    this.auth
      .getStatus()
      .pipe(
        map((userOrNull) => AuthApiActions.getAuthStatusSuccess(userOrNull))
      )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthUserActions.login),
      concatMap((action) => {
        return this.auth.login(action.username, action.password).pipe(
          map((user) => AuthApiActions.loginSuccess(user)),
          catchError((reason) => of(AuthApiActions.loginFailure(reason)))
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthUserActions.login),
        tap(() => this.router.navigateByUrl("/"))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthUserActions.logout),
        tap(() => this.auth.logout())
      ),
    { dispatch: false }
  );
}
