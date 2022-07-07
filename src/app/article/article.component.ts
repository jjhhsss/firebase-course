import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class articleComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    date: string;

    @Input()
    body: string;

    constructor() {

    }

    ngOnInit() {

    }
}


