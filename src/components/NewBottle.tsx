import { useRef, useContext } from 'react';

import { BottlesContext } from '..//store/bottles-context';
import classes from './NewBottle.module.css';
import {BottleType} from '../models/Bottle.type';

const NewBottle: React.FC = () => {
  const bottlesCtx = useContext(BottlesContext);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const regionInputRef = useRef<HTMLInputElement>(null);
  const countryTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const nameForm = nameInputRef.current!.value;
    const yearForm = yearInputRef.current!.value;
    const descriptionForm = descriptionInputRef.current!.value;
    const regionForm = regionInputRef.current!.value;
    const countryForm = countryTextInputRef.current!.value;

    const bottle:BottleType = {
      name: nameForm,
      year: Number(yearForm),
      description: descriptionForm,
      region: regionForm,
      country: countryForm,
    };

    bottlesCtx.addBottle(bottle);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' ref={nameInputRef} />
      <label htmlFor='year'>Year</label>
      <input type='number' id='year' ref={yearInputRef} />
      <label htmlFor='description'>Description</label>
      <input type='text' id='description' ref={descriptionInputRef} />  
      <label htmlFor='region'>Region</label>
      <input type='text' id='region' ref={regionInputRef} />  
      <label htmlFor='country'>Country</label>
      <input type='text' id='country' ref={countryTextInputRef} />      
      <button>Add Bottle</button>
    </form>
  );
};

export default NewBottle;
