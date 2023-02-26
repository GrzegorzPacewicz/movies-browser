import {
  Description,
  InfoContainer,
  MovieTitle,
  NoMovieImage,
  NoMovieImageIcon,
  Poster,
  Rate,
  Rating,
  Release,
  Star,
  Tag,
  TagButton,
  Tags,
  TileContainer,
  Votes,
} from "./styled";
import star from "../images/star.svg";
import { useSelector } from "react-redux";
import { APIImageUrl } from "../../features/dataAPI";
import { selectGenres } from "../../features/genresSlice";

export const PopularMoviesTile = ({
  poster,
  title,
  date,
  voteAverage,
  voteCount,
  genres,
}) => {
  const genresArray = useSelector(selectGenres);
  const movieGenres = genresArray.filter((genre) => genres.includes(genre.id));

  return (
    <TileContainer>
      {poster ? (
        <Poster
          src={`${APIImageUrl}/w342${poster}`}
          alt="Movie Poster"
        ></Poster>
      ) : (
        <NoMovieImage>
          <NoMovieImageIcon />
        </NoMovieImage>
      )}

      <InfoContainer>
        <Description>
          <MovieTitle>{title}</MovieTitle>
          <Release>{date.slice(0, 4)}</Release>
          <Tags>
            {movieGenres.map((genre) => (
              <TagButton key={genre.id}>
                <Tag>{genre.name}</Tag>
              </TagButton>
            ))}
          </Tags>
        </Description>
        <Rating>
          {voteCount ? (
            <>
              <Star src={star} /> <Rate>{voteAverage.toFixed(1)}</Rate>{" "}
              <Votes>{voteCount} votes</Votes>
            </>
          ) : (
            <Votes>No votes yet</Votes>
          )}
        </Rating>
      </InfoContainer>
    </TileContainer>
  );
};
