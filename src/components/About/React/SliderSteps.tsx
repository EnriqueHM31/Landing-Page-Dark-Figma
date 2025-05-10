import Slider from '../../Home/React/Slider';
import CardSteps from './CardStep';
import { steps } from '../../../mooks/steps.json';

export default function SliderSteps() {
	return (
		<Slider
			items={steps}
			CardComponent={(item) => <CardSteps {...item} />}
			color="focus:shadow-secondary focus:border-secondary hover:shadow-secondary hover:border-secondary"
			typeCard="Steps"
		/>
	);
}
