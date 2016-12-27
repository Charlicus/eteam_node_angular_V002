import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { CapitalizePipe }      from './pipes/capitalize.pipe'

import { FlashComponent }      from './components/flash.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CapitalizePipe, FlashComponent ],
  exports:      [ CapitalizePipe, FlashComponent ]
})
export class SharedModule { }
