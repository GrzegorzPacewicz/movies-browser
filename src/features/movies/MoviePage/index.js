import BigMovieTile from "../../../common/BigMovieTile";
import { Container } from "../../../common/Container";
import MovieTile from "../../../common/MovieTile";

const MoviePage = () => {
  return (
    <>
      <BigMovieTile />
      <Container>
        <MovieTile />
      </Container>
    </>
  );
};

export default MoviePage;
