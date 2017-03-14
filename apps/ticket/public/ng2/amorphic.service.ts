import {Supertype, supertypeClass, property, remote} from 'amorphic';
import {Controller} from '../js/controller';

// Start angular stuff
import {Injectable, OnInit} from '@angular/core';

export class AmorphicService implements OnInit {

    controller: Controller;

    ngOnInit(): void {
        this.controller = window.controller;
    }
}