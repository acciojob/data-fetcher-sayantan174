import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState("Loading");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((Response) => Response.json())
      .then((data) => setData(data));
  });
  return (
    <div>
      {/* Do not remove the main div */}
      <p>{data}</p>
    </div>
  );
};

export default App;
