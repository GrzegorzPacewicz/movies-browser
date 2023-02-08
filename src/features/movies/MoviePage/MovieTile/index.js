import {
  BasicInfo,
  MovieData,
  MovieTileWrapper,
  MovieTitle,
  NoVotes,
  Poster,
  Production,
  ProductionCountries,
  Rate,
  Rating,
  ReleaseYear,
  Star,
  Summary,
  Tag,
  TagButton,
  Tags,
  Votes,
} from "./styled";
import star from "../../../../images/star.svg";
import { formatDate } from "../../../utilities";

const MovieTile = ({
  title,
  releaseYear,
  releaseDate,
  productionCountries,
  overview,
  voteAverage,
  voteCount,
  poster,
  tags,
}) => {
  return (
    <>
      <MovieTileWrapper>
        <Poster src={poster} />
        <MovieData>
          <MovieTitle>{title}</MovieTitle>
          <ReleaseYear>{releaseYear.slice(0, 4)}</ReleaseYear>
          <BasicInfo>
            <Production>Production:</Production>
            <ProductionCountries>
              {productionCountries.map((country) => country.name).join(", ")}
            </ProductionCountries>
          </BasicInfo>
          <BasicInfo>
            <Production>Release date:</Production>{" "}
            <ProductionCountries>
              {formatDate(releaseDate, "dd.MM.yyyy")}
            </ProductionCountries>
          </BasicInfo>
          <Tags>
            {tags.map((tag, index) => (
              <TagButton key={index}>
                <Tag>{tag.name}</Tag>{" "}
              </TagButton>
            ))}
          </Tags>
          <Rating>
            {voteCount === 0 ? (
              <NoVotes>No votes yet</NoVotes>
            ) : (
              <>
                <Star src={star} /> <Rate>{voteAverage.toFixed(1)}</Rate>
                <Votes>/ 10</Votes> <Votes>{voteCount} votes</Votes>
              </>
            )}
          </Rating>
          <Summary>{overview}</Summary>
        </MovieData>
      </MovieTileWrapper>
    </>
  );
};

export default MovieTile;
