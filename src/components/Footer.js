import { OPEN_HOUR, CLOSE_HOUR } from "../data";
import Order from "./Order";

function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <div className="order">
          <p className="status status--closed">
            <span className="status__dot" aria-hidden="true" />
            Sorry, we're closed
          </p>
          <p className="order__hint">
            We're happy to welcome you between {OPEN_HOUR}:00 and {CLOSE_HOUR}:00.
          </p>
        </div>
      )}
      <address className="footer__contact">
        123 Pizza Street, Singapore · <a href="tel:+6561234567">+65 6123 4567</a>
      </address>
    </footer>
  );
}

export default Footer;
