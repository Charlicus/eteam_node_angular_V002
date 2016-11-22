import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'flash',
    templateUrl: './flash.component.html'
})

export class FlashComponent {
    @Input()
    private info;

    setClasses(){
        let classes = {
            'alert': true,
            'alert-warning': this.info.type=='warning',
            'alert-success': this.info.type=='success',
            'alert-info': this.info.type=='info',
            'alert-danger': this.info.type=='danger'
        }
        return classes;
    }

}