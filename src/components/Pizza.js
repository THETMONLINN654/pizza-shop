// Reusable component: every pizza card is rendered from the props it receives.
function Pizza({ name, ingredients, photoName, price, soldOut, isFavourite, onToggleFavourite }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} loading="lazy" />
      <article className="pizza__info">
        <div className="pizza__top">
          <h3>{name}</h3>
          <button
            type="button"
            className={`fav-btn ${isFavourite ? "fav-btn--active" : ""}`}
            onClick={() => onToggleFavourite(name)}
            aria-pressed={isFavourite}
            aria-label={isFavourite ? `Remove ${name} from favourites` : `Add ${name} to favourites`}
          >
            {isFavourite ? "♥" : "♡"}
          </button>
        </div>
        <p>{ingredients}</p>
        <span className="pizza__price">{soldOut ? "Sold out" : `$${price}`}</span>
      </article>
    </li>
  );
}

export default Pizza;
