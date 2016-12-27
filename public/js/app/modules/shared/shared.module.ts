import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { CapitalizePipe }      from './pipes/capitalize.pipe'

import { FlashComponent }      from './components/flash.component';
import { SpinnerComponent }    from './components/spinner.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CapitalizePipe, FlashComponent, SpinnerComponent ],
  exports:      [ CapitalizePipe, FlashComponent, SpinnerComponent]
})
export class SharedModule { }
