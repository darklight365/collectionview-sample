import { Component } from '@angular/core'

import { installPlugin } from './install.module';
installPlugin();

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {}
