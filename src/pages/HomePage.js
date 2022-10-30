import { HomeComponent } from '../components/homepage';
import { Page } from './Page';

export class HomePage extends Page {
	constructor() {
		super('HOME', 'home');
	}

	mount(element) {
		super.mount(element);
		this.children = new HomeComponent();
		this.element.innerHTML = this.render();
		this.children.initEvent();
	}

	unmount() {
		this.children.destroyEvent();
	}
}
