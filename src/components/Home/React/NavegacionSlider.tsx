type NavegacionSliderProps = {
	page: number;
	totalPages: number;
	prev: () => void;
	next: () => void;
	dehabilitadoNext: string;
	dehabilitadoPrevious: string;
	color: string;
};

export default function NavegacionSlider({ page, totalPages, prev, next, dehabilitadoNext, dehabilitadoPrevious, color }: NavegacionSliderProps) {
	return (
		<div className="flex justify-between items-center gap-3 px-3">
			<span className="text-sm text-white">
				{String(page + 1).padStart(2, '0')} of {String(totalPages).padStart(2, '0')} Page
			</span>

			<div className="flex gap-7">
				<button
					onClick={prev}
					className={`border border-white/25 focus:shadow-lg hover:shadow-lg  focus:border transition-colors px-3 py-2 rounded-xl ${color} ${dehabilitadoPrevious}`}
					disabled={page === 0}
				>
					<img src="/src/assets/Home/iconPrevious.png" alt="Icono de anterior" />
				</button>
				<button
					onClick={next}
					className={`border border-white/25 focus:shadow-lg  hover:shadow-lg focus:border transition-colors px-3 py-2 rounded-xl ${color} ${dehabilitadoNext}`}
					disabled={page === totalPages - 1}
				>
					<img src="/src/assets/Home/iconNext.png" alt="Icono de siguiente" />
				</button>
			</div>
		</div>
	);
}
