import { APropos } from '../components/aPropos/aProposComponent';
import { Portefolio } from '../components/portefolio';
import { PresentationComponent } from '../components/presentation/presentationComponent';
import { Page } from './Page';

export class HomePage extends Page {
	constructor() {
		super('HOME', 'homePage');
	}

	mount(element) {
		super.mount(element);
		this.children = [
			new PresentationComponent(),
			new Portefolio(),
			new APropos()
		];
		this.element.innerHTML = this.render();
		this.children.map(e => e.initEvent());
	}

	unmount() {
		this.children.destroyEvent();
	}
}
