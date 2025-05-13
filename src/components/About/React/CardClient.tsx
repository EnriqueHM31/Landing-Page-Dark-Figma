import { type CardClient } from '../../../types';

export default function CardClient({ id, date, name, domain, category, said, url }: CardClient) {
	return (
		<a
			href={url}
			target="_blank"
			className="p-6 flex flex-col gap-6 border border-white/25 rounded-2xl min-h-[350px] mb-5 shadow-lg hover:border-yellow-300 transition-all hover:shadow-yellow-300 focus:border-yellow-300 focus:shadow-yellow-300 relative overflow-hidden group"
		>
			<div
				className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-2xl flex items-center justify-center translate-y-80 group-hover:translate-y-0 transition duration-700 hover:translate-0"
				id="visitar"
			>
				<p className="px-6 py-3 rounded-2xl bg-yellow-300 w-fit text-black font-bold">Visited Website</p>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex flex-col gap-4">
					<h3 className=" text-white/50 text-sm">Since {date}</h3>
					<p className="text-2xl font-bold ">{name}</p>
				</div>
			</div>
			<div className="flex items-center">
				<div className="basis-1/2 flex flex-col gap-3 flex-wrap">
					<div className="flex gap-2">
						<img src="/src/assets/About/IconDomain.png" alt="Icono de categoría" />
						<p className="text-white/50 text-sm">Domain</p>
					</div>
					<p className="text-white text-sm">{domain}</p>
				</div>
				<div className="basis-1/2 flex flex-col  gap-3 border-s border-white/25 ps-5">
					<div className="flex gap-4">
						<img src="/src/assets/About/IconCategory.png" alt="Icono de categoría" />
						<p className="text-white/50 text-sm">Category</p>
					</div>
					<p className="text-white text-sm">{category}</p>
				</div>
			</div>

			<div className="flex flex-col gap-3 border border-white/25 p-2 h-full justify-center">
				<h2>What They Said 🤗</h2>
				<p className="text-white/50 text-sm">{said}</p>
			</div>
		</a>
	);
}
