import { Component, OnInit }    from '@angular/core';
import { Router } from '@angular/router';

import { DataService }          from '../data.service';


@Component({
  selector: 'beta-join',
  templateUrl: './beta-join.html',
  styleUrls: ['./beta-join.css']
})
export class BetaJoin implements OnInit {
  
    modalShow: string = 'hide';
    email: string = '';
    greeting: string = 'Hi! We’re still building out our business. Would you like to beta test this kit instead of purchasing it?';

    constructor(
        private dataService: DataService, private router: Router
    ) {
        
    }

    hideModal() {
        this.modalShow = 'hide';
    }

    close() {
        this.hideModal();
        this.email = '';
        this.greeting = 'Hi! We’re still building out our business. Would you like to beta test this kit instead of purchasing it?';
    }

    submit() {
        this.dataService.saveAction('Email Submitted', this.email, '').subscribe(res=>{
            console.log(res);
        });
        this.greeting = 'Thank you! We’ll be in touch with you over email.';
    }

    greetingChange() {
        
    }

    ngOnInit() {
        this.dataService.betaJoinModal.subscribe(flag=> {
            this.modalShow = 'show';
        });
    }
}
