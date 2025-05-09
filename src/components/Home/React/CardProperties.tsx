import BotonSecondary from './BotonSecondary';

interface CardPropertiesProps {
	img: string;
	title: string;
	subtitle: string;
	link: { title: string; href: string };
	botones: { icono: string; texto: string }[];
	precio: string;
	link_informacion: string;
}

export default function CardServices({ img, title, subtitle, botones, precio, link_informacion }: CardPropertiesProps) {
	return (
		<div className="flex-1 flex flex-col gap-4 bg-primary p-6 my-7 rounded-2xl border border-white/15 hover:border-secondary transition-colors">
			<img src={img} alt="Imagen de propiedad" className="rounded-xl w-full h-60 object-cover" />

			<div className="flex-1 flex flex-col gap-3">
				<h2 className="text-2xl font-semibold">{title}</h2>
				<p className="text-white/50">{subtitle}</p>
			</div>

			<div className="flex gap-3 my-4 flex-wrap">
				{botones.map(({ icono, texto }, i) => (
					<button
						key={i}
						className="flex-1 flex gap-2 items-center w-full max-w-[200px] border border-white/25 hover:shadow-lg hover:shadow-secondary hover:border-secondary transition-colors px-3 py-2 rounded-xl"
					>
						<div className="w-6 h-6 flex-shrink-0">
							<img className="w-full h-full object-contain" src={icono} alt={texto} />
						</div>
						<p className="font-semibold text-xs">{texto}</p>
					</button>
				))}
			</div>

			<div className="flex items-center gap-9 mt-auto">
				<div className="flex flex-col gap-2">
					<p className="text-white/50 font-semibold">Price</p>
					<p className="text-xl font-bold">{precio}</p>
				</div>

				<div className="w-full flex justify-end">
					<BotonSecondary texto="View Property Details" href={link_informacion} clase="w-full h-full flex items-center justify-center" />
				</div>
			</div>
		</div>
	);
}
