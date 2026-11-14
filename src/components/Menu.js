import { useEffect, useState } from "react";
import pizzaData from "../data";
import Pizza from "./Pizza";
import SearchBar from "./SearchBar";

const STORAGE_KEY = "pizza-favourites";

function loadFavourites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function Menu() {
  const [query, setQuery] = useState("");
  const [favourites, setFavourites] = useState(loadFavourites);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

  // Remember favourites between visits
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
    } catch {
      /* storage unavailable – favourites just won't persist */
    }
  }, [favourites]);

  function handleToggleFavourite(name) {
    setFavourites((current) =>
      current.includes(name) ? current.filter((n) => n !== name) : [...current, name]
    );
  }

  const search = query.trim().toLowerCase();
  const visiblePizzas = pizzaData.filter((pizza) => {
    const matchesSearch =
      pizza.name.toLowerCase().includes(search) ||
      pizza.ingredients.toLowerCase().includes(search);
    const matchesFavourite = !showFavouritesOnly || favourites.includes(pizza.name);
    return matchesSearch && matchesFavourite;
  });

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p className="menu__intro">
        {pizzaData.length} creations, all baked in our stone oven with the freshest
        organic ingredients.
      </p>

      <SearchBar
        query={query}
        onQueryChange={setQuery}
        showFavouritesOnly={showFavouritesOnly}
        onToggleFavouritesOnly={() => setShowFavouritesOnly((s) => !s)}
        favouriteCount={favourites.length}
      />

      {/* Conditional rendering: show the list, or a friendly empty state */}
      {visiblePizzas.length > 0 ? (
        <ul className="pizzas">
          {visiblePizzas.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut}
              isFavourite={favourites.includes(pizza.name)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </ul>
      ) : (
        <p className="menu__empty">
          {showFavouritesOnly && favourites.length === 0
            ? "No favourites yet — tap the ♡ on a pizza to save it."
            : "No pizzas match your search. Try another ingredient!"}
        </p>
      )}
    </main>
  );
}

export default Menu;
