const API_URL = '/utils/categorie.json';

export class Categorie {
	async getAll() {
		try {
			const response = await fetch(`${API_URL}`);
			const allResources = await response.json();
			return response.status >= 400
				? {
						error: {
							statusCode: response.status,
						},
				  }
				: allResources;
		} catch (error) {
			return { error: { ...error } };
		}
	}
}
