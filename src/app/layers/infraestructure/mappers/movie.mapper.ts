import { MovieDto } from "..";
import { environment } from "../../../../environments/environment";
import { Movie } from "../../domain";

export class MovieMapper {
    static toEntity(dto: MovieDto): Movie {
      return new Movie(
        dto.id.toString(),
        dto.title,
        `${environment.imageUrl}${dto.poster_path}`,
        dto.vote_average
      );
    }
}
  