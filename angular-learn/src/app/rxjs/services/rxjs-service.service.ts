import { Injectable } from '@angular/core';
import { Observable, of, fromEvent, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable()
export class RxjsServiceService {

  constructor() { }

  displayName(): void {
    console.log('Rxjs service');
  }

  makeObservables(): Observable<number> {
    return new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
    });
  }

  executeObservables(): void {
    this.makeObservables().subscribe(
      result => {
        console.log(`Executed from A: ${result}`);
      }
    );
    this.makeObservables().subscribe(
      result => {
        console.log(`Executed from B: ${result}`);
      }
    );
  }

  testObservables(): void {
    const numberObservable$ = of(1);
    numberObservable$.subscribe(
      result => {
        console.log(result);
      }
    );

    const eventObservable$ = fromEvent(document, 'click');
    eventObservable$.subscribe(
      result => {
        console.log(result);
      }
    )
  }

  /** Subject only emits the value after it is subscribed
   * Same subject subscribed twice will only make one call
   * It is an observable that can multicast: talk to many subscribers
   */
  testSubject(): void {
    const subject = new Subject();

    subject.next('A');
    subject.next('B');
    subject.subscribe(
      result => {
        console.log('A:', result);
      }
    );
    subject.next('C');
    subject.next('D');
    subject.subscribe(
      result => {
        console.log('B:', result);
      }
    );
    subject.next('E');
    subject.next('F');
  }

  /** Special type of subject which needs the initial/default value
   * Every observer on subscribe get the latest value
   * For ex: When it was subscribed second time, it got the latest value
   */
  testBehaviourSubject(): void {
    const behaviorSubject = new BehaviorSubject('Apple');

    behaviorSubject.subscribe(
      result => {
        console.log('A:', result);
      }
    );

    behaviorSubject.next('Ball');
    behaviorSubject.next('Cat');
    
    behaviorSubject.subscribe(
      result => {
        console.log('B:', result);
      }
    );
    
    behaviorSubject.next('Dog');
    behaviorSubject.next('Elephant');
  }


  /** Special type of subject
   * Need to provide the buffer size
   * Every observer gets the last value mentioned in the buffer size
   */
  testReplaySubject(): void {
    const replaySubject = new ReplaySubject<number>(3);

    replaySubject.next(1);
    
    replaySubject.subscribe(
      result => {
        console.log('A:', result);
      }
    );

    replaySubject.next(2);
    replaySubject.next(3);
    replaySubject.next(4);
    replaySubject.next(5);

    replaySubject.subscribe(
      result => {
        console.log('B:', result);
      }
    );

    replaySubject.next(6);
  }

  /** Special type of subject
   * Last value is passed to the subscribers only when complete method is called
   */
  testAsyncSubject(): void {
    const asyncSubject = new AsyncSubject<number>();

    asyncSubject.subscribe(
      result => {
        console.log('A:', result);
      }
    );

    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.complete();

    asyncSubject.subscribe(
      result => {
        console.log('B:', result);
      }
    );
  }
}
