import { Component } from './Component';

export class Div extends Component {
	constructor(attribute, children) {
		super('div', attribute, children);
	}

	initEvent() {
		if (Array.isArray(this.children)) {
			this.children.forEach(el => el.initEvent?.());
			return;
		}
		this.children.initEvent?.();
	}
}
