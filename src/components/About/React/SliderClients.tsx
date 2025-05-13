import Slider from '../../React/Slider';
import { clients } from '../../../mooks/Clients.json';
import CardClient from './CardClient';

export default function SliderClients() {
	return (
		<Slider
			items={clients}
			CardComponent={(item) => <CardClient {...item} />}
			color="focus:shadow-yellow-300 focus:border-yellow-300 hover:shadow-yellow-300 hover:border-yellow-300 transition-colors"
			typeCard="Clients"
		/>
	);
}
