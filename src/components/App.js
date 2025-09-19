import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import toursData from "../data/toursData";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = () => {
    setLoading(true);
    setTimeout(() => {
      setTours(toursData); // load local data
      setLoading(false);
    }, 500); // simulate network delay
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main id="main">
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main id="main">
        <div className="title">
          <h2>No Tours Left</h2>
          <button onClick={fetchTours} className="btn" id="refresh-btn">
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
