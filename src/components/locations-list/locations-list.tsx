import { CITIES } from '../../const/const';

const LocationsItem = ({ city }: { city: string }) => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item}" href="#">
      <span>{city}</span>
    </a>
  </li>
);

function LocationsList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => (<LocationsItem city={item} key={item} />))}
    </ul>
  );
}


export default LocationsList;
