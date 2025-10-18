import { Observable } from 'rxjs';

export abstract class UseCase<Param = void, Result = void > {
    abstract execute(params: Param): Result
}

export abstract class UseCaseObs<Param = void, Result = void> {
    abstract execute(params: Param): Observable<Result>
}

export abstract class NoParams{}
export abstract class NoResult{}