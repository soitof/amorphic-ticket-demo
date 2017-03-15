import {Supertype, supertypeClass, property, remote} from 'amorphic';
import {Injectable, OnInit} from '@angular/core';

import {Controller} from '../js/controller';
import {WindowRef} from './window.service';

@Injectable()
export class AmorphicService implements OnInit {

    controller: Controller;

    constructor(private windowRef: WindowRef)

    ngOnInit(): void {
        this.controller = windowRef.nativeWindow.controller;
    }
}