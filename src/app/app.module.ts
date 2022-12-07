import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
// import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { MaterialModule } from "./material.module";
import { reducers, metaReducers } from "./shared/state";
import { AuthModule } from "./auth";
import { BooksModule } from "./books";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MoviesModule } from './movies';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   { path: "", pathMatch: "full", redirectTo: "/books" }
    // ]),
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    MaterialModule,
    AuthModule,
    BooksModule,
    AppRoutingModule,
    MoviesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
