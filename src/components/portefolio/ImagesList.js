import { Component } from '../global';

export class ImagesList extends Component {
	imagesList;

	constructor(imagesList) {
		super('div', { name: 'id', value: 'project_presentation_container' }, [
			...imagesList.map(
				e =>
					new Component('img', [
						{ name: 'src', value: `${e.url}` },
						{ name: 'alt', value: `${e.name}` },
					])
			),
		]);
		this.imagesList = imagesList;
	}
}
