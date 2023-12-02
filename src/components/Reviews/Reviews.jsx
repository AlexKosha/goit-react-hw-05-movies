import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as MoviseService from 'services/MoviesServices';

const Reviews = () => {
  const [reviews, setRevies] = useState(null);
  const { movieId } = useParams();
  const isFirstRender = useRef(true);
  console.log(reviews);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const getMovieReviews = async () => {
      if (!movieId) {
        return;
      }
      try {
        const dataReviews = await MoviseService.getMovieReviews(movieId);
        if (dataReviews.results.length === 0) {
          toast.error("We don't have any reviews for this movie");
          return;
        }
        setRevies(dataReviews.results);
      } catch (error) {}
    };
    getMovieReviews();
  }, [movieId]);
  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author:{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
