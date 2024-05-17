import {Component} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';

@Component({
	selector: 'app-homepage',
	standalone: true,
	imports: [HeaderComponent],
	templateUrl: './homepage.component.html'
})
export class HomepageComponent {}
