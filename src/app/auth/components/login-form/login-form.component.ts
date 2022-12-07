import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

export interface LoginEvent {
  username: string;
  password: string;
}

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent {
  @Output() login = new EventEmitter<LoginEvent>();
  @Input() error: string | null = null;

  formGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  onSubmit() {
    const { username, password } = this.formGroup?.value;
    if (username !== null && username !== undefined && password !== null && password !== undefined) {
      this.login.emit({ username, password });
    }
  }
}
