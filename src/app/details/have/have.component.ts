import {Component} from '@angular/core';

@Component({
    selector: 'app-have',
    templateUrl: `app-have-detail.html`
})
export class HaveComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to home page"
    };
};
