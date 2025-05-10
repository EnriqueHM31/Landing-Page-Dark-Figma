// src/components/Home/React/SliderPropiedades.tsx
import Slider from './Slider';
import CardProperties from './CardProperties';
import { properties } from '../../../mooks/properties.json';

export default function SliderProperties() {
	return (
		<Slider
			items={properties}
			CardComponent={(item) => <CardProperties {...item} />}
			color="hover:shadow-secondary hover:border-secondary"
			typeCard="Properties"
		/>
	);
}
