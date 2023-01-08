import { Component } from '../global';

export class APropos extends Component {
	constructor() {
		super('section', { name: 'id', value: 'apropos_component' }, [
			new Component(
				'h1',
				{ name: 'id', value: 'title_section_apropos' },
				'Apropos'
			),
		]);
	}
}
