import { Component } from '@angular/core';

import { RxjsServiceService } from './rxjs/services/rxjs-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RxjsServiceService]
})
export class AppComponent {
  title = 'angular-learn';

  constructor(
    private rxjsService: RxjsServiceService
  ) {
    this.rxjsService.displayName();
    // this.rxjsService.executeObservables();
    // this.rxjsService.testObservables();
    // this.rxjsService.testSubject();
    // this.rxjsService.testBehaviourSubject();
    // this.rxjsService.testReplaySubject();
    this.rxjsService.testAsyncSubject();
  }
}
