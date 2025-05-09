import { useState } from 'react';
import NavegacionSlider from './NavegacionSlider';

interface SliderProps<T> {
	items: T[];
	CardComponent: (item: T) => React.ReactNode;
	chunkSize?: number;
	color: string;
}

export default function Slider<T>({ items, CardComponent, chunkSize = 3, color }: SliderProps<T>) {
	const totalPages = Math.ceil(items.length / chunkSize);
	const [page, setPage] = useState(0);

	const next = () => {
		if (page < totalPages - 1) setPage(page + 1);
	};

	const prev = () => {
		if (page > 0) setPage(page - 1);
	};

	const visibleItems = items.slice(page * chunkSize, (page + 1) * chunkSize);

	return (
		<div className="w-full">
			<div className="flex flex-col gap-6 md:flex-row md:gap-4">
				{visibleItems.map((item, index) => (
					<CardComponent key={index} {...item} />
				))}
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
