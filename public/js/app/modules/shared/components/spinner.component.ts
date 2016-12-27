import { Component, OnInit, Inject} from '@angular/core';

import { SpinnerService } from '../../../services/spinner.service';

@Component({
    moduleId: module.id,
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent implements OnInit{
    private active: boolean = false;
    constructor(private spinnerService: SpinnerService){}
    public ngOnInit(): void {
        this.spinnerService.active$.subscribe(active => this.active = active);
    }
}
