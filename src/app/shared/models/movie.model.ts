export interface MovieModel {
  id: string;
  name: string;
  earnings: number;
  description?: string;
}

export type MovieRequiredProps = Pick<MovieModel, "name" | "earnings">;
