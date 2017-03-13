import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {Controller} from './controller';

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
        Controller,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        Controller
    ]
})
export class AppModule {
}
