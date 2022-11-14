import { Component, Div, P } from '../global';

export class PresentationComponent extends Component {
	constructor() {
		super('section', { name: 'id', value: 'a_presentation_component' }, [
			new Div({ name: 'id', value: 'presentation' }, [
				new Div(
					{ name: 'id', value: 'phrase_general' },
					`Bonjour. </br> Je suis <span>Philippe Chevalier</span>,`
				),
				new Div({ name: 'id', value: 'cv_donwload' }, [
					new Div(
						{ name: 'id', value: 'image_information' },
						new Component(
							'img',
							[
								{ name: 'src', value: './images/download-solid.svg' },
								{ name: 'alt', value: 'download' },
							],
							'Curiculum Vitae'
						)
					),
				]),
			]),
			new Div(
				{ name: 'id', value: 'portrait' },
				new Component('img', [
					{ name: 'src', value: './images/portrait.png' },
					{ name: 'alt', value: 'portrait' },
				])
			),
			new Div({ name: 'id', value: 'logo_resaux' }, [
				new Component('img', [
					{ name: 'src', value: './images/square-behance.svg' },
					{ name: 'alt', value: 'behance' },
				]),
				new Component('img', [
					{ name: 'src', value: './images/instagram.svg' },
					{ name: 'alt', value: 'instagram' },
				]),
			]),
		]);
	}
}
