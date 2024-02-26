import { Link } from 'react-router-dom';
import { CITIES } from '../../const/const';

type CityProps = {
  city: string;
}

function LocationsItem({ city }: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
}

function LocationsList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => (<LocationsItem city={item} key={item} />))}
    </ul>
  );
}


export default LocationsList;
