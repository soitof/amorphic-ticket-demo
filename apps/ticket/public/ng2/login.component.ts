import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AmorphicService} from './amorphic.service';
import {Controller} from '../js/controller';

@Component({
    selector: 'login',
    //templateUrl: '../html_templates/menu.component.html'
    template: `
    <h1>Please Register</h1>
    <form #loginForm="ngForm" class="form-horizontal" role="form">
        <div class="form-group">
            <!--Text field-->
            <label for="email" class="col-md-2 control-label">Email</label>
            <div class="col-md-4">
                <input [(ngModel)]="controller.email" type="text" class="form-control"
                       name="email" placeholder="email" focus="1" required/>
                <span style="color:red" *ngIf="controller.isError('email')"><br/><span>{{controller.error}}</span></span>
            </div>
        </div>

        <div class="form-group">
            <!--Text field-->
            <label for="password" class="col-md-2 control-label">password</label>
            <div class="col-md-4">
                <input [(ngModel)]="controller.password" type="text" class="form-control"
                       name="password" placeholder="password" focus="2" required/>
                <span style="color:red" *ngIf="controller.isError('password')"><br/><span>{{controller.error}}</span></span>
            </div>
        </div>

    </form>

    <button (click)="controller.publicLogin()" type="submit" class="btn btn-primary btn-lg"
            [disabled]="!loginForm.form.valid">Login</button>
    <span style="color:red" *ngIf="controller.isError('')"><br/><span>{{controller.error}}</span></span>
    `
})

export class LoginComponent {
    controller: Controller;

    constructor(private amorphic: AmorphicService) {}

    ngOnInit(): void {
        this.controller = this.amorphic.controller;
    }

    login(): void {
        this.controller.publicLogin()
            .then(function() {
                //this.router.navigate(['/tickets']);
            });
    }
}