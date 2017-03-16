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
    //templateUrl: '../html_templates/people.component.html'
    template: `
    <div class="page-header">
        <a (click)="peopleFetch()">refresh</a>&nbsp;&nbsp;&nbsp;
        <h1>People</h1>
    </div>

    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let person of people">
                    <td>{{person.getFullName()}}</td>
                    <td>{{person.email}}</td>
                    <td>
                        <div *ngIf="controller.loggedInPerson.role === 'admin'">
                            <select [(ngModel)]="controller.loggedInPerson.role"></select>
                            <a (click)="person.remove()">Delete</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `
})

export class PeopleComponent implements OnInit {

    ngOnInit(): void {
    }
}