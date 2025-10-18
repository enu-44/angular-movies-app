import { SerieDto } from "..";
import { environment } from "../../../../environments/environment";
import { Serie } from "../../domain";

export class SerieMapper {
    static toEntity(dto: SerieDto): Serie {
      return new Serie(
        dto.id.toString(),
        dto.name,
        `${environment.imageUrl}${dto.poster_path}`,
        dto.vote_average
      );
    }
}
  