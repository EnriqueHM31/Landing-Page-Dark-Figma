export default function Estrellas({ cantidad }: { cantidad: number }) {
	return (
		<div className="flex gap-3">
			{Array.from({ length: cantidad }).map((_, i) => (
				<div className="size-10 rounded-full bg-black border border-yellow-300 flex items-center justify-center">
					<img src="/src/assets/Home/start.png" alt="Icono de estrella" />
				</div>
			))}
		</div>
	);
}
