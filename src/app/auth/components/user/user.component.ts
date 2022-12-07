import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "src/app/shared/models";
import { Store } from "@ngrx/store";
import { State, selectAuthUser } from "src/app/shared/state";
import { AuthUserActions } from "../../actions";
import { MatDialog } from "@angular/material/dialog";
import { LogoutDialogComponent } from "../logout-dialog/logout-dialog.component";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {
  user$: Observable<UserModel | null>;

  constructor(private store: Store<State>, public matDialog: MatDialog) {
    this.user$ = store.select(selectAuthUser);
  }

  onLogout() {
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LogoutDialogComponent, {
      height: "150px",
      width: "350px",
      disableClose: true,
      // data: this.user$,
    });

    modalDialog.afterClosed().subscribe((result) => {
      if (result) {
        this.store.dispatch(AuthUserActions.logout());
      }
    });
  }
}
