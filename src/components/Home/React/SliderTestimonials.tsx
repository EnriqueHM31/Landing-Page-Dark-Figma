// src/components/Home/React/SliderPropiedades.tsx
import Slider from '../../React/Slider';
import { testimonials } from '../../../mooks/testimonials.json';
import CardTestimonials from './CardTestimonials';

export default function SliderProperties() {
	return (
		<Slider
			items={testimonials}
			CardComponent={(item) => <CardTestimonials {...item} />}
			color="hover:shadow-yellow-300 hover:border-yellow-300 focus:shadow-yellow-300 focus:border-yellow-300"
			typeCard="Testimonials"
		/>
	);
}
