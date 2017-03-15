import {Controller} from './controller';
import * as RemoteObjectTemplate from 'semotus';
import * as Q from 'Q';
window['Q'] = Q;
window['RemoteObjectTemplate'] = RemoteObjectTemplate;
window['Controller'] = Controller;

import '../ng2/app.module.ts';
import '../ng2/menu.component.ts';
import '../ng2/people.component.ts';
import '../ng2/project.component.ts';
import '../ng2/project.component.ts';
import '../ng2/ticket.component.ts';
import '../ng2/tickets.component.ts';

import '../ng2/amorphic.service.ts';

// Angular
//import '@angular/platform-browser';
//import '@angular/platform-browser-dynamic';
//import '@angular/core';
//import '@angular/common';
//import '@angular/forms';
//import '@angular/http';
//import '@angular/router';
//
//// RxJS
//import 'rxjs';