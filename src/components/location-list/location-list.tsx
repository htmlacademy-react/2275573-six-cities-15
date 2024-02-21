import { CITIES } from '../../const/const';

const LocationItem = ({ city }: { city: string }) => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item}" href="#">
      <span>{city}</span>
    </a>
  </li>
);

function LocationList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((item) => (<LocationItem city={item} key={item} />))}
    </ul>
  );
}


export default LocationList;
