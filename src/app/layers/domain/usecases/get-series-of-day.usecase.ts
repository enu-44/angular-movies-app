import { Serie, SerieRepository } from "..";
import { Failure, NoParams, Result, UseCase } from "../../../core";

export class GetSeriesOfDayUseCase implements UseCase<NoParams, Promise<Result<Serie[], Failure>>> {
    constructor(private _serieRepository: SerieRepository) { }
    execute = (_:NoParams): Promise<Result<Serie[], Failure>> => this._serieRepository.getSeriesOfDay();
}