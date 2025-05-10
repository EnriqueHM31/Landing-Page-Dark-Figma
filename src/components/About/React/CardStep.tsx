interface CardPropertiesProps {
	step: string;
	title: string;
	content: string;
}

export default function CardSteps({ title, content, step }: CardPropertiesProps) {
	return (
		<article className="p-2 flex-1/2 flex flex-col min-h-[370px] xl:min-h-[250px] h-full ">
			<div className="p-3 border-s border-secondary">
				<span>{`Step ${step}`}</span>
			</div>
			<div className="px-3 py-6  h-full mb-5 flex flex-col gap-3 justify-center relative">
				<div className="absolute size-40 xl:size-32 top-0 left-0  bg-linear-to-br from-secondary to-transparent to-60% opacity-50 z-10"></div>
				<div className="absolute size-40 xl:size-32 top-0 left-0 z-20 border-s border-t border-secondary"></div>

				<h2 className="z-40 text-2xl font-semibold">{title}</h2>
				<p className="z-40">{content}</p>
			</div>
		</article>
	);
}
