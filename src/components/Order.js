import { CLOSE_HOUR } from "../data";

function Order() {
  return (
    <div className="order">
      <p className="status status--open">
        <span className="status__dot" aria-hidden="true" />
        We're currently open
      </p>
      <p className="order__hint">Order before {CLOSE_HOUR}:00 for same-night delivery.</p>
      <button type="button" className="btn" onClick={() => alert("Thanks! Your order is on its way 🍕")}>
        Order
      </button>
    </div>
  );
}

export default Order;
