import { useState, useEffect } from 'react';
import NavegacionSlider from './NavegacionSlider';

const ANIMATES = [
	{ name: 'flip-right', componente: 'Properties' },
	{ name: 'flip-left', componente: 'Testimonials' },
	{ name: 'flip-up', componente: 'Questions' },
	{ name: 'zoom-out', componente: 'Steps' },
];

interface SliderProps<T> {
	items: T[];
	CardComponent: (item: T) => React.ReactNode;
	color: string;
	typeCard: string;
}

export default function Slider<T>({ items, CardComponent, color, typeCard }: SliderProps<T>) {
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

	const ANIMATE_TYPE = ANIMATES.find(({ componente }) => componente === typeCard);

	return (
		<div className="w-full">
			<div
				className={`grid gap-3 ${
					chunkSize === 1 ? 'grid-cols-1' : chunkSize === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
				}`}
			>
				{visibleItems.map((item, index) => {
					const isLast = index === visibleItems.length - 1;
					const isAlone = visibleItems.length < chunkSize;

					return (
						<div
							data-aos={ANIMATE_TYPE?.name}
							data-aos-delay={`${index * 300}`}
							key={index}
							className={`h-full ${isLast && isAlone ? 'sm:col-span-2 lg:col-span-3' : ''}`}
						>
							{/* Este div fuerza a que todas las tarjetas llenen el alto de la fila */}
							<div className="h-full flex flex-col">{CardComponent({ ...item })}</div>
						</div>
					);
				})}
			</div>

			<NavegacionSlider
				page={page}
				totalPages={totalPages}
				prev={prev}
				next={next}
				dehabilitadoNext={page === totalPages - 1 ? ' disable' : ''}
				dehabilitadoPrevious={page === 0 ? ' disable' : ''}
				color={color}
			/>
		</div>
	);
}
