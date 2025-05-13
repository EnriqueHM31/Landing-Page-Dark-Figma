import { useState, useEffect } from 'react';
import { ANIMACION_SLIDERS } from '../assets/js/PageInfo';
import type { SliderHooksProps } from '../types';

export function useSlider<T>({ items, typeCard }: SliderHooksProps<T>) {
	const [chunkSize, setChunkSize] = useState(3); // default for laptop
	const [page, setPage] = useState(0);

	// ⬇️ Detectar tamaño de pantalla
	useEffect(() => {
		const updateChunkSize = () => {
			const width = window.innerWidth;
			if (width >= 1024) setChunkSize(3); // Laptop (Tailwind md/lg = 1024+)
			else if (width >= 768) setChunkSize(2); // Tablet
			else setChunkSize(1); // Móvil
		};

		updateChunkSize(); // Llamar al inicio
		window.addEventListener('resize', updateChunkSize);

		return () => window.removeEventListener('resize', updateChunkSize);
	}, []);

	const totalPages = Math.ceil(items.length / chunkSize);

	const next = () => {
		if (page < totalPages - 1) setPage(page + 1);
	};

	const prev = () => {
		if (page > 0) setPage(page - 1);
	};

	const visibleItems = items.slice(page * chunkSize, (page + 1) * chunkSize);

	const ANIMATE_TYPE = ANIMACION_SLIDERS.find(({ componente }) => componente === typeCard);

	return { chunkSize, page, totalPages, next, prev, visibleItems, ANIMATE_TYPE };
}
