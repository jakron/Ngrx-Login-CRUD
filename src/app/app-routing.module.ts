import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailComponent } from "./books/components/book-detail/book-detail.component";
import { BooksPageComponent } from "./books/components/books-page/books-page.component";
import { MoviesPageComponent } from "./movies/components/movies-page/movies-page.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/books",
  },
  {
    path: "books",
    component: BooksPageComponent,
    canActivate: [],
    // redirectTo: "",
  },
  {
    path: "movies",
    component: MoviesPageComponent,
    canActivate: [],
    // redirectTo: "",
  },
  {
    path: "music",
    component: BookDetailComponent,
    canActivate: [],
    // redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
