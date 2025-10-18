import { Production } from "..";

export class Movie extends Production {
  constructor(
    id: string,
    title: string,
    imageUrl: string,
    public rating: number
  ) {
    super(id, title, imageUrl, rating);
  }
}