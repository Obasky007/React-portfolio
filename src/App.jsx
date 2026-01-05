import React, { useEffect } from "react";
import Todo from "./Pages/Todo";
import Homepage from "./Pages/Homepage";
import Form from "./Pages/Form";
import Shop from "./Pages/Shop";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
