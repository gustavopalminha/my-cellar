import {BottleType} from './Bottle.type';

class Bottle {
  id: string;
  year: number;
  description: string;
  name: string;
  region: string;
  country: string;

  constructor(
    props: BottleType
  ) {
    this.description = props.description;
    this.year = props.year;
    this.name = props.name;
    this.region = props.region;
    this.country = props.country;
    this.id = new Date().toISOString();
  }
}

export default Bottle;