export interface Movie {
    _id: string;
    imdb_id: string;
    title: string;
    year: string;
    synopsis: string;
    runtime: string;
    released: number;
    trailer: string;
    certification: string;
    torrents: ITorrents;
    genres: string[];
    images: IImages;
    rating: IRating;
}
interface ITorrents {
    en: IEn;
}
interface IEn {
    '1080p': {
        provider: string;
        filesize: string;
        size: number;
        peer: number;
        seed: number;
        url: string;
    };
    '720p': {
        provider: string;
        filesize: string;
        size: number;
        peer: number;
        seed: number;
        url: string;
    };
}
interface IImages {
    poster: string;
    fanart: string;
    banner: string;
}
interface IRating {
    percentage: number;
    watching: number;
    votes: number;
    loved: number;
    hated: number;
}
<<<<<<< HEAD

// CUALQUIER COSA EL COMANDO DE ABAJO VA COMO PIÑA Y ME PERMITE ARMAR ESTO:
=======
//CUALQUIER COSA EL COMANDO DE ABAJO VA COMO PIÑA Y ME PERMITE ARMAR ESTO:
>>>>>>> 8d00eb36a605bc7b75b322bffb56ad6560d0aa0d

// curl https://tv-v2.api-fetch.website/movie/tt1431045 | json-ts --stdin