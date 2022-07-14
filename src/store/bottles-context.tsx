import React, { useState } from 'react';
import { BottleType } from '../models/Bottle.type';
import Bottle from '../models/Bottle';
import {BottlesContextObj} from './bottles-context.type'

export const BottlesContext = React.createContext<BottlesContextObj>({
  items: [],
  addBottle: () => {},
  removeBottle: (id: string) => {},
});

const BottlesContextProvider: React.FC = (props) => {
  const [bottles, setBottles] = useState<Bottle[]>([]);

  const addBottleHandler = (obj: BottleType) => {
    const newBottle = new Bottle(obj);

    setBottles((prevBottles) => {
      return prevBottles.concat(newBottle);
    });
  };

  const removeBottleHandler = (bottleId: string) => {
    setBottles((prevBottles) => {
      return prevBottles.filter((bottle) => bottle.id !== bottleId);
    });
  };

  const contextValue: BottlesContextObj = {
    items: bottles,
    addBottle: addBottleHandler,
    removeBottle: removeBottleHandler,
  };

  return (
    <BottlesContext.Provider value={contextValue}>
      {props.children}
    </BottlesContext.Provider>
  );
};

export default BottlesContextProvider;