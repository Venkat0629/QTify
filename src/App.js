import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { fetchData } from "./api/api";

// ... other imports

function App() {
  const [searchData, setSearchData] = useState();
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((result) => {
      setData((prevData) => {
        return { ...prevData, [key]: result };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", () => fetchData("albums/top"));
    generateData("newAlbums", () => fetchData("albums/new"));
    generateData("songs", () => fetchData("songs"));
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <NavBar searchData={[...topAlbums, ...newAlbums]} />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
    </>
  );
}

export default App;
