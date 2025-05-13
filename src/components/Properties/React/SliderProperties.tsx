// src/components/Home/React/SliderPropiedades.tsx
import Slider from '../../React/Slider';
import CardProperties from './CardProperties';
import { properties } from '../../../mooks/properties.json';

export default function SliderProperties() {
	return (
		<Slider
			items={properties}
			CardComponent={(item) => <CardProperties {...item} />}
			color="focus:shadow-secondary focus:border-secondary hover:shadow-secondary hover:border-secondary"
			typeCard="Properties"
		/>
	);
}
