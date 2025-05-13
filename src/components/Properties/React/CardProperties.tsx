import BotonSecondary from '../../React/BotonSecondary';
import { type CardProperties } from '../../../types';
import BotonPrimary from '../../React/BotonPrimary';

export default function CardProperties({ img, title, subtitle, precio, link_informacion, eslogan }: CardProperties) {
	return (
		<div className="flex-1 flex flex-col gap-4 md:gap-6 bg-primary p-6 my-7 rounded-2xl border border-white/15 hover:border-secondary transition-colors md:min-h-[500px] xl:min-h-[600px] min-h-[500px] items-stretch justify-stretch">
			<img src={img} alt="Imagen de propiedad" className="rounded-xl w-full h-60 object-cover" />

			<BotonPrimary texto={eslogan} url={link_informacion} clase="rounded-2xl" />

			<div className="flex-1 flex flex-col gap-3">
				<h2 className="md:text-2xl text-xl font-semibold">{title}</h2>
				<p className="text-white/50">{subtitle}</p>
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
