import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  return gifs.map((singleGif) => (
    <Gif
      title={singleGif.title}
      url={singleGif.url}
      id={singleGif.id}
      key={singleGif.id}
    />
  ));
}
