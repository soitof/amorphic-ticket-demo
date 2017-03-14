import {Supertype, supertypeClass, property, remote} from 'amorphic';
import {BaseController} from './baseController';
import {Component} from '@angular/core';
import {TicketItemComment} from './tsmodel/ticketItemComment';
import {Ticket} from './tsmodel/ticket';
import * as Q from 'Q';
import * as _ from 'underscore';
import {Person} from "./tsmodel/person";
import {Project} from "./tsmodel/project";

// Start angular stuff
import {Component} from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: '../html_templates/projects.component.html'
})

export class ProjectsComponent implements OnInit {

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }
}