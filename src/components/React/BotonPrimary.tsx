import { type BotonProperties } from '../../types';

export default function BotonPrimary({ url, texto, clase }: BotonProperties) {
	return (
		<a
			className={`px-3 py-2 xl:rounded-xl border border-white/25 hover:bg-white/15 transition-colors ${clase} xl:w-fit w-full text-center`}
			href={url}
		>
			{texto}
		</a>
	);
}
