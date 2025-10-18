import { BaseMediaDto } from "..";
export interface MovieDto extends BaseMediaDto {
    title:             string;
    original_title:    string;
    release_date:      Date;
    video:             boolean;
}
