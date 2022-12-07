import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";
import { MovieModel, MovieRequiredProps } from "../models";

const BASE_URL = "http://localhost:3000/movies";
const HEADER = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<MovieModel[]>(BASE_URL);
  }

  load(id: string) {
    return this.http.get<MovieModel>(`${BASE_URL}/${id}`);
  }

  create(movieProps: MovieRequiredProps) {
    const Movie: MovieModel = {
      id: uuid(),
      ...movieProps,
    };

    return this.http.post<MovieModel>(
      `${BASE_URL}`,
      JSON.stringify(Movie),
      HEADER
    );
  }

  update(id: string, updates: MovieRequiredProps) {
    return this.http.patch<MovieModel>(
      `${BASE_URL}/${id}`,
      JSON.stringify(updates),
      HEADER
    );
  }

  delete(id: string) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
