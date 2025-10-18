export abstract class Production {
  constructor(
    public id: string,
    public title: string,
    public imageUrl: string,
    public score: number
  ) {}
}