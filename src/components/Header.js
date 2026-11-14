function Header({ isOpen }) {
  return (
    <header className="header">
      <p className="header__eyebrow">Est. 2026 · Wood-fired</p>
      <h1>Andy's Pizza Co.</h1>
      {/* Conditional rendering: tagline only shows while the shop is open */}
      {isOpen && <p className="header__tagline">Authentic Italian Cuisine</p>}
    </header>
  );
}

export default Header;
