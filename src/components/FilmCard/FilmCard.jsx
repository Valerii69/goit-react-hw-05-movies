import PropTypes from 'prop-types';
import { MovieCard, GenresList, Section } from './FilmCard.styled';
import { NO_IMAGE, IMG_PATH } from 'utils/constans';

const FilmCard = ({
  original_title,
  overview,
  vote_average,
  genres,
  backdrop_path,
}) => {
  let image = !!backdrop_path ? IMG_PATH + backdrop_path : NO_IMAGE;

  return (
    <Section>
      <MovieCard>
        <img src={image} alt={original_title} />
        <div>
          <h2>{original_title}</h2>
          <h3>Rating</h3>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres && genres.map(({ name }) => <li key={name}>{name}</li>)}
          </GenresList>
        </div>
      </MovieCard>
    </Section>
  );
};
FilmCard.propTypes = {
  original_title: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.array,
  backdrop_path: PropTypes.string,
};

export default FilmCard;
