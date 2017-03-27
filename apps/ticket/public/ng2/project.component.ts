import {Component, OnInit} from '@angular/core';
import {Person} from "../js/tsmodel/person";
import {Project} from "../js/tsmodel/project";

@Component({
    selector: 'project',
    //templateUrl: '../html_templates/project.component.html'
    template: `
    <div class="container">
        Project
    </div>
    `
})

export class ProjectComponent implements OnInit {

    comment: string = '';

    ngOnInit(): void {
    }
}