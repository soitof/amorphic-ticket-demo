import {Supertype, supertypeClass, property, remote} from 'amorphic';
import {BaseController} from '../js/baseController';
import {Component, OnInit} from '@angular/core';
import {TicketItemComment} from '../js/tsmodel/ticketItemComment';
import {Ticket} from '../js/tsmodel/ticket';
import * as Q from 'Q';
import * as _ from 'underscore';
import {Person} from "../js/tsmodel/person";
import {Project} from "../js/tsmodel/project";

@Component({
    selector: 'menu',
    //templateUrl: '../html_templates/projects.component.html'
    template: `
    <div class="page-header">
        <div class="pull-right">
            <a (click)="projectFetch()">refresh</a>&nbsp;&nbsp;&nbsp;
            <button (click)="newProject()" type="button" class="btn btn-primary btn-lg">New Project</button>
        </div>
        <h1>Projects</h1>
    </div>

    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>By</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let project of projects">
                    <td><a (click)="ticket=row;route.private.project()" >{{project.name || 'unnamed'}}</a></td>
                    <td>{{project.created}}</td>
                    <td>{{project.creator ? project.creator.getFullName() : ''}}</td>
                    <td><a (click)="project=row;projectTicket()">Delete</a></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
})

export class ProjectsComponent implements OnInit {

    ngOnInit(): void {
    }
}