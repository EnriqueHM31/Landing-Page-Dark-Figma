export interface SliderProps<T> {
    items: T[];
    CardComponent: (item: T) => React.ReactNode;
    color: string;
    typeCard: string;
}

export interface SliderHooksProps<T> {
    items: T[];
    typeCard: string;
}

export type NavegacionSliderProps = {
    page: number;
    totalPages: number;
    prev: () => void;
    next: () => void;
    dehabilitadoNext: string;
    dehabilitadoPrevious: string;
    color: string;
};


export interface CardProperties {
    img: string;
    title: string;
    subtitle: string;
    link: { title: string; href: string };
    botones: { icono: string; texto: string }[];
    precio: string;
    link_informacion: string;
    eslogan: string;
}

export type CardQuestions = {
    question: string;
    answer: string;
    link: string;
};

export interface CardTestimonials {
    title: string;
    content: string;
    author: {
        avatar: string;
        name: string;
        location: string;
    };
    estrellas: number;
}

export interface CardSteps {
    step: string;
    title: string;
    content: string;
}

export interface CardClient {
    id: number;
    date: string;
    name: string;
    domain: string;
    category: string;
    said: string;
    url: string;
}

export interface BotonProperties {
    url: string;
    texto: string;
    clase?: string;
}
