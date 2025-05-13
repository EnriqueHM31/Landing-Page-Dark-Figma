import { type BotonProperties } from '../../types';

export default function BotonSecondary({ texto, url, clase = '' }: BotonProperties) {
	return (
		<a href={url} className={`px-3 py-3 rounded-xl bg-secondary hover:bg-black hover:text-white border border-secondary transition-colors ${clase}`}>
			{texto}
		</a>
	);
}
