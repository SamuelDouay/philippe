import { ProposComponent } from '../components/propos/proposComponent';
import { Page } from './Page';

export class HomePage extends Page {
	constructor() {
		super('HOME', 'homePage');
	}

	mount(element) {
		super.mount(element);
		this.children = [new ProposComponent()];
		this.element.innerHTML = this.render();
		this.children.map(e => e.initEvent());
	}

	unmount() {
		this.children.destroyEvent();
	}
}
