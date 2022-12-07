import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./auth.effects";
import { LoginPageComponentModule } from "./components/login-page";
import { UserComponentModule } from "./components/user";
import { LogoutDialogComponent } from './components/logout-dialog/logout-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [EffectsModule.forFeature([AuthEffects]), MatDialogModule, MatButtonModule],
  exports: [LoginPageComponentModule, UserComponentModule],
  declarations: [LogoutDialogComponent]
})
export class AuthModule {}
