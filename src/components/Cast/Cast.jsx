import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Services/Api';
import { List, Item, Wrapper } from './Cast.styled';
export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(res => setCast(res));
  }, [movieId]);
  if (!cast) {
    return;
  }
  return (
    <Wrapper>
      <List>
        {cast.map(({ id, name }) => (
          <Item key={id}>{name}</Item>
        ))}
      </List>
    </Wrapper>
  );
};
