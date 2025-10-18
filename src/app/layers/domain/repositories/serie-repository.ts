import { Serie } from "..";
import { Failure, Result } from "../../../core";

export abstract class SerieRepository {
  abstract getSeriesOfDay(): Promise<Result<Serie[], Failure>>;
}