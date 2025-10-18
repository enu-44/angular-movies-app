import { BaseMediaDto } from "..";
export interface SerieDto extends BaseMediaDto {
    name:              string;
    original_name:     string;
    first_air_date:    Date;
    origin_country:    string[];
}
