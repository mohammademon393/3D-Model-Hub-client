import React, { useEffect, useState } from "react";
import Banner from "../Components/Header/Banner";
import FutureModels from "../Components/HPComponents/FutureModels";

const Home = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/models")
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Banner />

      <FutureModels models={models} loading={loading} />
    </div>
  );
};

export default Home;
