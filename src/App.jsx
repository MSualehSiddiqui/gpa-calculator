import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Outlet />
  )
}

export default App;