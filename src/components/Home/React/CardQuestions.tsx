type CardPropertiesProps = {
	question: string;
	answer: string;
	link: string;
};

export default function CardQuestions({ question, answer, link }: CardPropertiesProps) {
	return (
		<div className="xl:flex-1 flex flex-col gap-4 bg-black p-8 my-7 rounded-2xl border border-white/15 hover:border-white transition-colors justify-between">
			<h2 className="text-xl font-semibold xl:basis-16 basis-24">{question}</h2>
			<p className="text-white/50 xl:basis-20 md:basis-24 ">{answer}</p>
			<a href={link} className="bg-primary text-white w-fit px-4 py-3 rounded-xl hover:bg-white/15 border border-white/25  transition-colors">
				Learn More
			</a>
		</div>
	);
}
