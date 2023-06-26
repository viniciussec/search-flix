import { Movie } from "./Movie";

export interface MovieDetailed extends Movie {
    genres: Genre[];
    runtime: number;
    overview: string;
}
interface Genre {
    id: number;
    name: string;
}