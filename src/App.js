import { useEffect, useState } from "react";
import { OPEN_HOUR, CLOSE_HOUR } from "./data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

// Open from 10:00 up to (but not including) 22:00
function checkIsOpen() {
  const hour = new Date().getHours();
  return hour >= OPEN_HOUR && hour < CLOSE_HOUR;
}

function App() {
  const [isOpen, setIsOpen] = useState(checkIsOpen);

  // Re-check every minute so the page updates itself at opening/closing time
  useEffect(() => {
    const id = setInterval(() => setIsOpen(checkIsOpen()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="container">
      <Header isOpen={isOpen} />
      <Menu />
      <Footer isOpen={isOpen} />
    </div>
  );
}

export default App;
