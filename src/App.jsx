import React, { useState, useEffect } from "react";
import "./assets/fonts/stylesheet.css";
import "./App.css";
import axios from "axios";

import Header from "./components/Headers";
import Content from "./components/Content";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3200/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Header
        restaurantName={data.restaurant.name}
        description={data.restaurant.description}
        image={data.restaurant.picture}
      />
      <Content categories={data.categories} />
    </>
  );
}

export default App;
