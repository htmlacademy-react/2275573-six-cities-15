import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PlaceCard from '../../components/place-card/place-card';
import { CARDS_MOCK } from '../../const/cards-mock';
import { Location } from '../../const/const';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard location={Location.Favorites} {...CARDS_MOCK[1]} />
                  <PlaceCard location={Location.Favorites} {...CARDS_MOCK[3]} />
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard location={Location.Favorites} {...CARDS_MOCK[1]} />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>

  );
}


export default Favorites;
