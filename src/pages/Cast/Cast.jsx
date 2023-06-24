import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { NO_IMAGE, IMG_PATH, API_KEY } from 'utils/constans';
import { Section, CastList, CastItem } from './Cast.styled';

const fetch = require('node-fetch');

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { url } = 'https://api.themoviedb.org/3/';
  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`${url}${movieId}/credits?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => {
        const { cast } = data;
        setCast(cast);
      })
      // .catch(() => {
      //   toast.error('Something went wrong');
      // })
      .finally(() => setLoading(false));
  }, [movieId]);
  if (loading) {
    return <Loader />;
  }

  return cast.length ? (
    <Section>
      <CastList>
        {cast.map(({ name, character, profile_path }) => (
          <CastItem key={name}>
            <img
              src={profile_path ? IMG_PATH + profile_path : NO_IMAGE}
              alt={name}
            />
            <h4>Actor: {name}</h4>
            <p>Character: {character}</p>
          </CastItem>
        ))}
      </CastList>
    </Section>
  ) : (
    <Section>
      <p>Cast list is empty</p>
    </Section>
  );
};

export default Cast;
