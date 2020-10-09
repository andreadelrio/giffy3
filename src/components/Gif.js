import React from "react";
import "./Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <div className="gif">
      <img alt={title} src={url} />
      <h3>{title}</h3>
    </div>
  );
}
