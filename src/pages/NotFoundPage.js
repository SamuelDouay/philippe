import { Page } from './Page';

export class NotFoundPage extends Page {
	constructor() {
		super('NOT FOUND', 'notFoundPage');
	}

	mount(element) {
		super.mount(element);
		this.element.innerHTML = `<h1>Page not found</h1>`;
	}
}
