import BotonSecondary from '../../React/BotonSecondary';
import { type CardProperties } from '../../../types';

const columnas = (i: number) => {
	return i === 2 ? 'md:col-span-2' : '';
};

export default function CardServices({ img, title, subtitle, botones, precio, link_informacion }: CardProperties) {
	return (
		<div className="flex-1 flex flex-col gap-4 md:gap-2 bg-primary p-6 my-7 rounded-2xl border border-white/15 hover:border-secondary transition-colors md:min-h-[700px] xl:min-h-min min-h-[780px] items-stretch justify-stretch">
			<img src={img} alt="Imagen de propiedad" className="rounded-xl w-full h-60 object-cover" />

			<div className="flex-1 flex flex-col gap-3">
				<h2 className="md:text-2xl text-xl font-semibold">{title}</h2>
				<p className="text-white/50">{subtitle}</p>
			</div>

			<div className="grid md:grid-cols-2 grid-cols-1 gap-3 xl:my-4">
				{botones.map(({ icono, texto }, i) => (
					<button
						key={i}
						className={`flex gap-2 items-center justify-center w-full border border-white/25 hover:shadow-lg hover:shadow-secondary hover:border-secondary transition-colors px-3 py-4 rounded-xl ${columnas(
							i,
						)}`}
					>
						<div className="size-3.5 flex-shrink-0">
							<img className="w-full h-full object-cover" src={icono} alt={texto} />
						</div>
						<p className="font-semibold text-sm">{texto}</p>
					</button>
				))}
			</div>

			<div className="flex items-center gap-9 mt-auto xl:flex-row flex-col">
				<div className="flex xl:flex-col md:flex-row gap-2 md:items-center xl:items-start">
					<p className="text-white/50 font-semibold md:text-xl">Price</p>
					<p className="text-xl font-bold">{precio}</p>
				</div>

				<div className="w-full flex justify-end">
					<BotonSecondary texto="View Property Details" url={link_informacion} clase="w-full h-full text-center" />
				</div>
			</div>
		</div>
	);
}
