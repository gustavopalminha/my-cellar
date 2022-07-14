import Bottle from '../models/Bottle'
import { BottleType } from '../models/Bottle.type';

export type BottlesContextObj = {
    items: Bottle[];
    addBottle: (obj: BottleType) => void;
    removeBottle: (id: string) => void;
  };