import {Component} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		NgIf
	],
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	isDarkMode: boolean = document.documentElement.getAttribute('data-bs-theme') === 'dark';

	toggleDarkMode(): void {
		this.isDarkMode = !this.isDarkMode;
		document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');
	}
}
