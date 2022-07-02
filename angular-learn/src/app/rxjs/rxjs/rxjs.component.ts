import { Component, OnInit } from '@angular/core';

import { RxjsServiceService } from '../services/rxjs-service.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(
    private rxjsService: RxjsServiceService
  ) {
    this.rxjsService.displayName();
   }

  ngOnInit(): void {
  }

}
