import { Injectable } from '@angular/core';
import { of, pipe, switchMap, mergeMap, concatMap, exhaustMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsOperatorService {

  constructor() { }

  /** Switch map operators returns the value of inner observables for each value of outer observable
   * It only maintains the one inner subscription at a time
   * Best use case would be the search autocomplete because we only care about the final search value
   */
  useSwitchMap(): void {
    const numberObservable$ = of(1, 2, 3, 4);
    const fruitObservable$ = of('apple', 'orange', 'grapes');

    numberObservable$.pipe(
      switchMap(
        val => {
          console.log('Initial value: ====> ', val);
          return fruitObservable$;
        }
      )
    ).subscribe(
      result => {
        console.log('Final value', result);
      }
    );
  }

  /** Merge map operators returns the value of inner observables for each value of outer observable
   * Alias to flatMap
   * The difference between switchMap and mergeMap is that mergeMap does not cancels any of its inner observables
   */
  useMergeMap(): void {
    const numberObservable$ = of(1, 2, 3, 4);
    const fruitObservable$ = of('apple', 'orange', 'grapes');

    numberObservable$.pipe(
      mergeMap(
        val => {
          console.log('Initial value: ====> ', val);
          return fruitObservable$;
        }
      )
    ).subscribe(
      result => {
        console.log('Final value', result);
      }
    );
  }

  /** The main advantage of concatMap is that if the new value arrives from the source observable
   * before the old request is completed then new request is not carried out immediately
   */
  useConcatMap(): void {
    const numberObservable$ = of(1, 2, 3, 4);
    const fruitObservable$ = of('apple', 'orange', 'grapes');

    numberObservable$.pipe(
      concatMap(
        val => {
          console.log('Initial value: ====> ', val);
          return fruitObservable$;
        }
      )
    ).subscribe(
      result => {
        console.log('Final value', result);
      }
    );
  }


  /** It passes the value from source and then create new inner observables
   * If the new request comes before the initial request is completed then it is dropped
   * If not then request will be triggered
   * Process 
   */
  useExhaustMap(): void {
    const numberObservable$ = of(1, 2, 3, 4);
    const fruitObservable$ = of('apple', 'orange', 'grapes');

    numberObservable$.pipe(
      exhaustMap(
        val => {
          console.log('Initial value: ====> ', val);
          return fruitObservable$;
        }
      )
    ).subscribe(
      result => {
        console.log('Final value', result);
      }
    );
  }
}
