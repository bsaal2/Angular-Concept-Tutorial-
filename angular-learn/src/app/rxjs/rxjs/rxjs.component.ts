import { Component, OnInit } from '@angular/core';

import { RxjsServiceService } from '../services/rxjs-service.service';
import { RxjsOperatorService } from '../services/rxjs-operator.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(
    private rxjsService: RxjsServiceService,
    private rxjsOperatorService: RxjsOperatorService
  ) {
    this.rxjsService.displayName();
   }

  ngOnInit(): void {
    // this.rxjsOperatorService.useSwitchMap();
    // this.rxjsOperatorService.useMergeMap();
    // this.rxjsOperatorService.useConcatMap();
    this.rxjsOperatorService.useExhaustMap();
  }

}
