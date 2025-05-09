type BotonSecondaryProps = {
	texto: string;
	href: string;
	clase?: string;
};

export default function BotonSecondary({ texto, href, clase = '' }: BotonSecondaryProps) {
	return (
		<a href={href} className={`px-3 py-3 rounded-xl bg-secondary hover:bg-black hover:text-white border border-secondary transition-colors ${clase}`}>
			{texto}
		</a>
	);
}
