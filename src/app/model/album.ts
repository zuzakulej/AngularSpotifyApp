export interface Album {
    id: string;
    name: string;
    artists: Artist[];
    images: Image[];
}

export interface Artist {
    id: string;
    name: string;
}

export interface Image {
    url: string;
    width: number;
    height: number;
}