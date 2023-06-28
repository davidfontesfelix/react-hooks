import React, { Suspense, useState } from 'react';

const loadComponent = () => import('./lazy-component');
const LazyComponent = React.lazy(loadComponent);

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button
          onClick={() => setShow((show) => !show)}
          onMouseOver={loadComponent}
        >
          show {show ? 'LC on screen' : 'LC is off screen'}
        </button>
      </p>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};

export default Home;
