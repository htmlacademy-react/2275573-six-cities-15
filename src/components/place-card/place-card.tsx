import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { PlaceCardProps } from '../../const/cards-mock';

function PlaceCard({ location, isPremium, link, image, name, price, isFavorite, rating, type }: PlaceCardProps): JSX.Element {
  const imageSize = {
    width: ((location === 'cities') || (location === 'near-places')) ? 260 : 150,
    height: ((location === 'cities') || (location === 'near-places')) ? 200 : 110,
  };

  return (
    <article className={`${location}__card place-card`}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${location}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer}>
          <img
            className="place-card__image"
            src={image}
            width={imageSize.width}
            height={imageSize.height}
            alt={name}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={link}>
            {name}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
