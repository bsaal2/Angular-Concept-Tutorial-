import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';

import { RxjsServiceService } from './services/rxjs-service.service';


@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ RxjsServiceService ],
  exports: [RxjsComponent]
})
export class RxjsModule { }
