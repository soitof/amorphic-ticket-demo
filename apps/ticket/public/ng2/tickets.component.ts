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
    //templateUrl: '../html_templates/tickets.component.html'
    template: `
    <div class="page-header">
        <div class="pull-right">
            <a (click)="ticketsFetch()">refresh</a>&nbsp;&nbsp;&nbsp;
            <button (click)="newTicket()" type="button" class="btn btn-primary btn-lg">New Ticket</button>
        </div>
        <h1>Tickets</h1>
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
                <tr *ngFor="let ticket of tickets">
                    <td><a (click)="ticket=row;route.private.ticket()" >{{ticket.title || 'unnamed'}}</a></td>
                    <td>{{ticket.created}}</td>
                    <td>{{ticket.creator ? ticket.creator.getFullName() : 'unknown'}}</td>
                    <td><a (click)="ticket=row;deleteTicket()">Delete</a></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
})

export class TicketsComponent implements OnInit {

    ngOnInit(): void {
    }
}