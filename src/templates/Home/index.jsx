import { useState } from 'react';
import { useFetch } from './use-fetch';

/* eslint-disable no-unused-vars */

export const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: {
        abc: '1',
      },
    },
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <p onClick={() => handleClick(p.id)} key={`post-${p.id}`}>
              {p.title}
            </p>
          ))
        ) : (
          <div onClick={() => handleClick('')}>{result.title}</div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
};

export default Home;
