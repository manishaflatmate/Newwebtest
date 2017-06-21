import {Component} from '@angular/core';

@Component({
    selector: 'app-need',
    templateUrl: `app-need-detail.html`
})
export class NeedComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to home page"
    };
};
