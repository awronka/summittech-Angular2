import { Component } from '@angular/core';
import { CounterDirective } from './counter.directive';

@Component({
    selector: 'my-app',
    templateUrl: 'app/template.component.html',
    directives: [CounterDirective]
})

export class AppComponent { 
}