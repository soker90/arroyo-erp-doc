export const SITE = {
	title: 'Arroyo Erp',
	description: 'Documentación de Arroyo ERP.',
	defaultLanguage: 'es_ES',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	Spanish: 'es',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	es: [
		{ text: '', header: true },
		{ text: 'Introducción', link: 'es/introduccion' },
		{ text: 'Inicio', header: true },
		{ text: 'Empezar', link: 'es/empezar' },
		{ text: 'Administración', header: true },
		{text: 'Proveedores', link: 'es/proveedores'},
		{ text: 'Page 2', link: 'es/page-2' },
		{ text: 'Page 3', link: 'es/page-3' },

		{ text: 'Another Section', header: true },
		{ text: 'Page 4', link: 'es/page-4' },
	],
};
