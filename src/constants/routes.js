import { NotFoundPage, HomePage } from '../pages';

/**
 * Tableau regroupant tout nos routes auquel peut repondre notre application.
 */
export const routes = [
	{
		page: new HomePage(),
		pathMatcher: new RegExp(/^\/$/, ''),
	},
	{
		page: new NotFoundPage(),
		pathMatcher: new RegExp(/.*/),
	},
];
