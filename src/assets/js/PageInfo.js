export const ESTADISTICAS = [
	{ numero: '200+', title: 'happy customers always' },
	{ numero: '10k+', title: 'Properties For Clients' },
	{ numero: '16+', title: 'Years for Experience' },
];

export const LOGROS = [
	{ title: '3+ Years of Excellence', content: 'With over 3 years in the industry, we have amassed a wealth of knowledge and experience.' },
	{
		title: 'Happy Clients',
		content: 'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
	},
	{
		title: 'Industry Recognition',
		content: 'We have earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.',
	},
];

export const VALUES = [
	{ title: 'Trust', icon: '/src/assets/About/Values1.png', texto: 'Trust is the cornerstone of every successful real estate transaction.' },
	{
		title: 'Excellence',
		icon: '/src/assets/About/Values2.png',
		texto: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
	},
	{
		title: 'Client-Centric',
		icon: '/src/assets/About/Values3.png',
		texto: 'Your dreams and needs are at the center of our universe. We listen, understand.',
	},

	{
		title: 'Our Commitment',
		icon: '/src/assets/About/Values4.png',
		texto: 'We are dedicated to providing you with the highest level of service, professionalism',
	},
];

export const ANIMACION_LOGROS_CARD = ['fade-right', 'fade-up', 'fade-left'];

export const ANIMACION_SLIDERS = [
	{ name: 'flip-right', componente: 'Properties' },
	{ name: 'flip-left', componente: 'Testimonials' },
	{ name: 'flip-up', componente: 'Questions' },
	{ name: 'zoom-out', componente: 'Steps' },
	{ name: 'zoom-in', componente: 'Clients' },
];

export const ANIMATION_WORK = ['fade-right', 'fade-up', 'fade-down', 'fade-left'];

export const TEAMWORK = [
	{ img: '/src/assets/About/Persona1.png', name: 'Max Mitchell', cargo: 'Founder', twitter: '/' },
	{ img: '/src/assets/About/Persona2.png', name: 'Sarah Johnson', cargo: 'Chief Real Estate Officer', twitter: '/' },
	{ img: '/src/assets/About/Persona3.png', name: 'David Brown', cargo: 'Head of Property Management', twitter: '/' },
	{ img: '/src/assets/About/Persona4.png', name: 'Michael Turner', cargo: 'Legal Counsel', twitter: '/' },
];

export const borderValuesPage = (i, lenght) => {
	return i === lenght - 1 ? 'border-b-0' : 'border-b border-white/50';
};

// Solo aplicamos lógica especial si es la última página y sobran menos de 3
export const getColSpanSlider = (index, isLastPage, chunkSize, itemsLeft) => {
	if (!isLastPage) return '';

	if (chunkSize === 3) {
		if (itemsLeft === 1) return 'lg:col-span-3 col-span-2';
		if (itemsLeft === 2) {
			// primer item de la última página → ocupa 2 columnas
			if (index === 0) return 'lg:col-span-1 col-span-2';
			// segundo item de la última página → ocupa 1 columna
			if (index === 1) return 'lg:col-span-2 col-span-2';
		}
	}
	if (chunkSize === 2 && itemsLeft === 1) return 'col-span-2';

	return '';
};

export const gridColumnasSlider = (chunkSize) => {
	return chunkSize === 1 ? 'grid-cols-1' : chunkSize === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
};
