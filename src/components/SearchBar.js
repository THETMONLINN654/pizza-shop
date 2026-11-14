function SearchBar({ query, onQueryChange, showFavouritesOnly, onToggleFavouritesOnly, favouriteCount }) {
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search-input" className="visually-hidden">
        Search pizzas
      </label>
      <input
        id="search-input"
        type="search"
        placeholder="Search by name or ingredient…"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button
        type="button"
        className={`chip ${showFavouritesOnly ? "chip--active" : ""}`}
        onClick={onToggleFavouritesOnly}
        aria-pressed={showFavouritesOnly}
      >
        ♥ Favourites ({favouriteCount})
      </button>
    </form>
  );
}

export default SearchBar;
