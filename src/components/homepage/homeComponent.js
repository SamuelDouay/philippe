import { Component } from '../global';
import { ProposComponent } from '../propos/proposComponent';

export class HomeComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'homePage' }, new ProposComponent());
	}
}