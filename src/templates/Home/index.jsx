/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { createContext, useContext, useState } from 'react';
import { cloneElement } from 'react';
import { Children } from 'react';

const s = {
  style: {
    fontSize: '50px',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState();
  const onTurn = () => setIsOn((s) => !s);

  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};

const TurnedON = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
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
      <div>
        <p>Oi</p>
        <TurnedON>
          <P> Aqui as coisa que vão acontecer quando estiver On.</P>
        </TurnedON>

        <TurnedOff>
          <P>Aqui as coisas que vão acontecer quando estiver Off.</P>
        </TurnedOff>
        <TurnButton {...s} />
      </div>
    </TurnOnOff>
  );
};

export default Home;
