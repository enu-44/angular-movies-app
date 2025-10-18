export interface BaseMediaDto {
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    original_language: string;
    genre_ids:         number[];
    popularity:        number;
    vote_average:      number;
    vote_count:        number;
}