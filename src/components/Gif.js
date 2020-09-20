import React from 'react'

export default function Gif({ title, id, url }) {
  return (
    <>
      <img alt={title} src={url} />
      <h3>{title}</h3>
    </>
  )
}