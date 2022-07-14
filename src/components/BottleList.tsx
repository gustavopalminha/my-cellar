import React, { useContext } from 'react';

import BottleItem from './BottleItem';
import { BottlesContext } from '../store/bottles-context';
import classes from './BottleList.module.css';

const BottleList: React.FC = () => {
  const bottlesCtx = useContext(BottlesContext);

  return (
    <ul className={classes.bottles}>
      {bottlesCtx.items.map((item) => (
        <BottleItem
          key={item.id}
          name={item.name}
          onRemoveTodo={bottlesCtx.removeBottle.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default BottleList;
