export interface Playlist {
    id: number;
    name: string;
    favourite: boolean;
    color: string;
    tracks?: Array<Track>;
}

// good practice: it should be in new file:
export interface Track{
    id: number;
    name: string;
}