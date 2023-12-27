import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { fetchData } from "./api/api";

// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/album/:slug
// https://qtify-backend-labs.crio.do/songs
// https://qtify-backend-labs.crio.do/faq
// https://qtify-backend-labs.crio.do/genres

function App() {
  const [searchData, setSearchData] = useState();
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((result) => {
      if (key === "genres" || key === "faq") {
        result = result.data;
      }
      setData((prevData) => {
        return { ...prevData, [key]: result };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", () => fetchData("albums/top"));
    generateData("newAlbums", () => fetchData("albums/new"));
    generateData("songs", () => fetchData("songs"));
    generateData("genres", () => fetchData("genres"));
    generateData("faq", () => fetchData("faq"));
  }, []);

  const {
    topAlbums = [],
    newAlbums = [],
    songs = [],
    genres = [],
    faq = [],
  } = data;

  return (
    <>
      <NavBar searchData={[...topAlbums, ...newAlbums]} />
      <Outlet
        context={{ data: { topAlbums, newAlbums, songs, genres, faq } }}
      />
    </>
  );
}

export default App;
