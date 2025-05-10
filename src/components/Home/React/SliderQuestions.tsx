// src/components/Home/React/SliderPropiedades.tsx
import Slider from './Slider';
import { questions } from '../../../mooks/questions.json';
import CardQuestions from './CardQuestions';

export default function SliderProperties() {
	return (
		<Slider
			items={questions}
			CardComponent={(item) => <CardQuestions {...item} />}
			color="hover:shadow-white hover:border-white focus:shadow-white focus:border-white"
			typeCard="Questions"
		/>
	);
}
