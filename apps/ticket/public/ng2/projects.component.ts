import {Component, OnInit} from '@angular/core';
import {Project} from "../js/tsmodel/project";

@Component({
    selector: 'projects',
    //templateUrl: '../html_templates/projects.component.html'
    template: `
    <div class="container">
        projects
    </div>
    `
})

export class ProjectsComponent implements OnInit {

    ngOnInit(): void {
    }
}