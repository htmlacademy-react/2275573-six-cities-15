import PlaceCard from '../../place-card/place-card';
import { CARDS_MOCK } from '../../../const/cards-mock';
import { Location } from '../../../const/const';

function NearPlaces(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {CARDS_MOCK.map((item) =>
          (<PlaceCard location={Location.Cities} key={`${item.id}`} {...item} />)).slice(0, 3)}
      </div>
    </section>
  );
}


export default NearPlaces;
