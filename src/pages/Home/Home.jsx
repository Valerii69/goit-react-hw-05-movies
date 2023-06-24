import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RiMovie2Fill } from 'react-icons/ri';
import { API_KEY } from 'utils/constans';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import { Section, Title, TrendList, TrendListItem, Films } from './Home.styled';
// const API_KEY = '7779282c18a7b23736a627b06c608831';
const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setTrendMovies(data.results))
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Section>
      <Title>Trending today</Title>
      {trendMovies && (
        <TrendList>
          {trendMovies.map(({ original_title, id }) => (
            <Films key={id}>
              <TrendListItem state={{ from: location }} to={`/movies/${id}`}>
                <RiMovie2Fill
                // style={{ margin: '5px' }}
                />
                {original_title}
              </TrendListItem>
            </Films>
          ))}
        </TrendList>
      )}
    </Section>
  );
};

export default Home;
