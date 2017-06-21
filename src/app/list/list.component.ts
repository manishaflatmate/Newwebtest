import {Component} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: `app-list.html`
})
export class ListComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to home page"
    };
};
