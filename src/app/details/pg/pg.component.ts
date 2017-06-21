import {Component} from '@angular/core';

@Component({
    selector: 'app-pg',
    templateUrl: `app-pg-detail.html`
})
export class PgComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to home page"
    };
};
