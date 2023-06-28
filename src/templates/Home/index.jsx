/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { cloneElement } from 'react';
import { Children } from 'react';

const s = {
  style: {
    fontSize: '50px',
  },
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState();
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedON = ({ isOn, children }) => (isOn ? children : null);

const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

const TurnButton = ({ isOn, onTurn, ...props }) => {
  return (
    <button onClick={onTurn} {...props}>
      Turn {isOn ? 'ON' : 'OFF'}
    </button>
  );
};

const P = ({ children }) => <p {...s}>{children}</p>;

export const Home = () => {
  return (
    <TurnOnOff>
      <TurnedON>
        <P> Aqui as coisa que vão acontecer quando estiver On.</P>
      </TurnedON>
      <TurnedOff>
        Aqui as coisas que vão acontecer quando estiver Off.
      </TurnedOff>
      <TurnButton {...s} />
    </TurnOnOff>
  );
};

export default Home;
