import {Component} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: "flatmate.html"
})
export class AboutComponent {
    welcome : string;
    constructor(){
        this.welcome = "Welcome to about page"
    };
};
