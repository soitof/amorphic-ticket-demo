import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import AmorphicService from 'amorphic.service';
import Menu from 'menu.component';
import PeopleComponent from 'people.component';
import ProjectComponent from 'project.component';
import ProjectsComponent from 'projects.component';
import TicketComponent from 'ticket.component';
import TicketsComponent from 'tickets.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/tickets',
                pathMatch: 'full'
            },
            {
                path: 'tickets',
                component: Tickets
            },
            {
                path: 'people',
                component: People
            },
            {
                path: 'projects',
                component: Projects
            }
        ])
    ],
    declarations: [
        Menu,
        TicketComponent,
        TicketsComponent,
        PeopleComponent,
        ProjectComponent,
        ProjectsComponent
    ],
    providers: [
        AmorphicService
    ],
    bootstrap: [
        Menu
    ]
})
export class AppModule {
}
