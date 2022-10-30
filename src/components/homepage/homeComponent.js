import { Component } from '../global';

export class HomeComponent extends Component {
	constructor() {
		super('div', { name: 'id', value: 'homePage' }, '<h1>HOME PAGE</h1>');
	}
}
	