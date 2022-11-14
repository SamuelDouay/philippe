import { Component, Div } from '../global';

export class CategorieList extends Component {
	categorieList;

	constructor(categorieList) {
		super('div', { name: 'id', value: 'radio_button_container' }, [
			...categorieList.map(
				e =>
					new Div(null, [
						new Component('input', [
							{ name: 'type', value: 'checkbox' },
							{ name: 'name', value: `${e.name}` },
						]),
						new Component(
							'label',
							{ name: 'for', value: `${e.name}` },
							`${e.label}`
						),
					])
			),
		]);
		this.categorieList = categorieList;
	}
}
