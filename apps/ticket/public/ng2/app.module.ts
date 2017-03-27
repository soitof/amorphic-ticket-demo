import {NgModule} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AmorphicService} from './amorphic.service';
import {Menu} from './menu.component';
import {PeopleComponent} from './people.component';
import {ProjectComponent} from './project.component';
import {ProjectsComponent} from './projects.component';
import {TicketComponent} from './ticket.component';
import {TicketsComponent} from './tickets.component';

//import {Controller} from '../js/controller';
import {WindowService} from './window.service';

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
                component: TicketsComponent
            },
            {
                path: 'people',
                component: PeopleComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            }
        ])
    ],
    declarations: [
        //Controller,
        Menu,
        TicketComponent,
        TicketsComponent,
        PeopleComponent,
        ProjectComponent,
        ProjectsComponent
    ],
    providers: [
        WindowService,
        AmorphicService
    ],
    bootstrap: [
        Menu
    ]
})
export class AppModule {
}
