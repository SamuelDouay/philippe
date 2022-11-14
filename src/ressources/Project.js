const API_URL = '/utils/donne.json';

export class Project {

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