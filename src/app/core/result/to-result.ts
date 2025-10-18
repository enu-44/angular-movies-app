// shared/utils/to-result.ts
import { Observable, catchError, map, of } from 'rxjs';
import { Failure, Left, Result, Right } from '..';

export function toResult<T>(
  obs$: Observable<T>,
  failureMessage: string
): Observable<Result<T, Failure>> {
  return obs$.pipe(
    map((data) => new Right<T>(data) as Result<T, Failure>),
    catchError((error) => {
      console.error(`[Api Error]: ${failureMessage}`, error);
      const failure = new Failure(failureMessage, error);
      return of(new Left<Failure>(failure) as Result<T, Failure>);
    })
  );
}
