import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: 'app/template.directive.html',
})

export class CounterDirective { 
    counter = 5;
    
    increment = function() {
       this.counter++;
    }
}