import {Component} from '@angular/core';
import {AmorphicService} from 'amorphic.service';

@Component({
    selector: 'menu',
    templateUrl: '../html_templates/menu.html'
})

export class Menu implements OnInit {

    controller: Controller;

    constructor(private amorphic: AmorphicService) {}

    ngOnInit(): void {
        this.controller = this.amorphic.getSession();
    }
}