import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import Sort from '../../components/sort/sort';
import { Location } from '../../const/const';
import { CARDS_MOCK } from '../../const/cards-mock';

type MainProps = {
  resultCount: number;
}

function Main({ resultCount }: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <Helmet>
          <title>Cities</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{resultCount} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                {CARDS_MOCK.map((item) =>
                  (<PlaceCard location={Location.Cities} key={`${item.id}`} {...item} />))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map location={Location.Cities} />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}


export default Main;
