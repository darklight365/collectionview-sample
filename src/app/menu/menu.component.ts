import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { demos } from '../install.module';

@Component({
    selector: 'ns-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    demos = demos;
    constructor(private router: RouterExtensions) {}

    goToDemo(component: string): void {
        this.router.navigate([component], {
            animated: true,
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'ease'
            }
        });
    }
}
