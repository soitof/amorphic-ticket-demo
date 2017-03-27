import {Injectable, OnInit} from '@angular/core';

//import {Controller} from '../js/controller';
import {WindowService} from './window.service';

@Injectable()
export class AmorphicService implements OnInit {

    controller: any;

    constructor(private windowService: WindowService) {}

    ngOnInit(): void {
        this.controller = this.windowService.nativeWindow.controller;
    }
}