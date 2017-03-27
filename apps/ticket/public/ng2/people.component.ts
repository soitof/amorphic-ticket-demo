import {Component, OnInit} from '@angular/core';
import {Person} from "../js/tsmodel/person";

@Component({
    selector: 'people',
    //templateUrl: '../html_templates/people.component.html'
    template: `
    <div class="container">
        people
    </div>
    `
})

export class PeopleComponent implements OnInit {

    ngOnInit(): void {
    }
}