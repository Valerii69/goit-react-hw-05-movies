import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import { API_KEY } from 'utils/constans';

import { Section, ReviewsList } from './Reviews.styled';
// const API_KEY = '7779282c18a7b23736a627b06c608831';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        setReviews(results);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, [movieId]);
  if (loading) {
    return <Loader />;
  }

  return reviews.length ? (
    <Section>
      <ReviewsList>
        {reviews.map(({ author, content }) => (
          <li key={author}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ReviewsList>
    </Section>
  ) : (
    <Section>
      <p>Reviews list is empty</p>
    </Section>
  );
};

export default Reviews;
