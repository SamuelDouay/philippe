import { Categorie, Project } from '../../ressources';
import { Component, Div } from '../global';
import { CategorieList } from './CategorieList';
import { ImagesList } from './ImagesList';

export class Portefolio extends Component {
	projetRessources;
	categorieRessources;

	constructor() {
		super('section', { name: 'id', value: 'portefolio_component' }, [
			new Component(
				'h1',
				{ name: 'id', value: 'title_section' },
				'Le portefolio'
			),
			new Div({ name: 'id', value: 'project_container' }, [
				new Div({ name: 'id', value: 'recherche_container' }, [
					new Component('input', { name: 'type', value: 'search' }),
					/*new Div({ name: 'id', value: 'radio_button_container' }, [
						new Div(null, [
							new Component('input', [
								{ name: 'type', value: 'checkbox' },
								{ name: 'name', value: 'graphisme' },
							]),
							new Component(
								'label',
								{ name: 'for', value: 'graphisme' },
								'Graphisme'
							),
						]),
						new Div(null, [
							new Component('input', [
								{ name: 'type', value: 'checkbox' },
								{ name: 'name', value: 'illustration' },
							]),
							new Component(
								'label',
								{ name: 'for', value: 'illustration' },
								'Illustration'
							),
						]),
						new Div(null, [
							new Component('input', [
								{ name: 'type', value: 'checkbox' },
								{ name: 'name', value: 'ui_design' },
							]),
							new Component(
								'label',
								{ name: 'for', value: 'ui_design' },
								'UI Design'
							),
						]),
						new Div(null, [
							new Component('input', [
								{ name: 'type', value: 'checkbox' },
								{ name: 'name', value: 'video' },
							]),
							new Component('label', { name: 'for', value: 'video' }, 'Video'),
						]),
					]),*/
				]),
			]),
		]);
		this.projetRessources = new Project();
		this.categorieRessources = new Categorie();
		this.handleQueryChange = this.handleQueryChange.bind(this);
	}

	handleQueryChange() {
		this.projetRessources.getAll().then(rep => {
			document.querySelector('#project_container').innerHTML =
				document.querySelector('#project_container').innerHTML +
				new ImagesList(rep).render();
		});
		this.categorieRessources.getAll().then(rep => {
			document.querySelector('#recherche_container').innerHTML =
				document.querySelector('#recherche_container').innerHTML +
				new CategorieList(rep).render();
		});
	}

	initEvent() {
		this.handleQueryChange();
	}
}
