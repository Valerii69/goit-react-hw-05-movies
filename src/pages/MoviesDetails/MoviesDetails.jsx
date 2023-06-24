import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';

// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { API_KEY } from 'utils/constans';
import Loader from 'components/Loader/Loader';
import FilmCard from 'components/FilmCard';
import {
  BtnBack,
  Section,
  Title,
  BtnInfoList,
  BtnLink,
} from './MoviesDetails.styled';
// const API_KEY = '7779282c18a7b23736a627b06c608831';

const btnLink = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      // .catch(() => {
      //   toast('Something went wrong');
      // })
      .finally(() => setLoading(false));
  }, [movieId]);
  if (loading) {
    return <Loader />;
  }
  const { original_title, overview, vote_average, genres, backdrop_path } =
    movie;
  return (
    <>
      <BtnBack onClick={() => navigate(location.state?.from ?? '/')}>
        <AiOutlineArrowLeft size="20" />
      </BtnBack>
      <FilmCard
        original_title={original_title}
        overview={overview}
        vote_average={vote_average}
        genres={genres}
        backdrop_path={backdrop_path}
      />
      <Section>
        <Title>Aditional information</Title>
        <BtnInfoList>
          {btnLink.map(({ href, text }) => (
            <li key={href}>
              <BtnLink to={href} state={location.state}>
                {text}
              </BtnLink>
            </li>
          ))}
        </BtnInfoList>
      </Section>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
