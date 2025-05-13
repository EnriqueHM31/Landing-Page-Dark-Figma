import NavegacionSlider from './NavegacionSlider';
import { useSlider } from '../../hooks/Slider';
import type { SliderProps } from '../../types';
import { getColSpanSlider, gridColumnasSlider } from '../../assets/js/PageInfo';

export default function Slider<T>({ items, CardComponent, color, typeCard }: SliderProps<T>) {
	const { chunkSize, page, totalPages, next, prev, visibleItems, ANIMATE_TYPE } = useSlider({ items, typeCard });

	const isLastPage = page === totalPages - 1;
	const itemsLeft = visibleItems.length;

	return (
		<div className="w-full">
			<div className={`grid gap-8 ${gridColumnasSlider(chunkSize)}`}>
				{visibleItems.map((item, index) => {
					return (
						<div
							data-aos={ANIMATE_TYPE?.name}
							data-aos-delay={`${index * 300}`}
							key={index}
							className={`h-full ${getColSpanSlider(index, isLastPage, chunkSize, itemsLeft)} `}
						>
							<div className={`h-full flex flex-col`}>{CardComponent({ ...item })}</div>
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
