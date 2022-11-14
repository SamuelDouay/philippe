import { Component } from '../components/global';

export class Page extends Component {
	element;
	#pageTitle;

	constructor(pageTitle, className, children) {
		super('div', { name: 'id', value: className }, children);
		this.#pageTitle = pageTitle;
	}

	set pageTitle(pageT) {
		this.#pageTitle = pageT;
	}

	get pageTitle() {
		return this.#pageTitle + ' | Philippe Chevalier';
	}

	mount(element) {
		this.element = element;
	}

	unmount() {
		return;
	}
}
