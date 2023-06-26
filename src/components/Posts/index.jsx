/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../context/PostsProvider/context';
import { loadPosts } from '../../context/PostsProvider/actions';
import { CounterContext } from '../../context/ExempleProvider/context';
import {
  decrementCounter,
  incrementCounter,
} from '../../context/ExempleProvider/actions';

export const Posts = () => {
  const postsContext = useContext(PostsContext);
  const counterContext = useContext(CounterContext);

  const { postsState, postsDispatch } = postsContext;
  const { counterState, counterDispatch } = counterContext;
  const isMounted = useRef(true);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter: {counterState.counter}+
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter: {counterState.counter}-
      </button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts..</strong>
        </p>
      )}
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
