import StartTestimonials from './StartTestimonials';
import { type CardTestimonials } from '../../../types';

export default function CardServices({ title, content, author, estrellas }: CardTestimonials) {
	const { avatar, name, location } = author;
	return (
		<div className="flex-1 flex flex-col gap-4 bg-primary p-6 my-7 rounded-2xl border border-white/15 hover:border-yellow-300 hover:shadow-sm hover:shadow-amber-200 transition-colors h-full md:min-h-[350px] min-h-[390px] items-stretch">
			<div>
				<StartTestimonials cantidad={estrellas} />
			</div>

			<div className="flex flex-col justify-between gap-3  h-full">
				<h2 className="text-2xl font-semibold">{title}</h2>
				<p className="text-white/50 basis-24 ">{content}</p>

				<div className="flex items-center gap-9 mt-3">
					<img src={avatar} alt={`Imagen de ${name}`} className="rounded-full w-12 h-12 object-cover" />
					<div>
						<p className="text-white">{name}</p>
						<p className="text-white/50">{location}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
