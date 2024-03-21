import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

function AnimeItem() {
  const { id } = useParams();
  console.log(id);

  const [anime, setAnime] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  const {
    title,
    title_japanese,
    synopsis,
    trailer,
    season,
    images,
    episodes,
    score,
    scored_by,
    type,
    status,
    rating,
    source,
    aired,
    duration,
  } = anime;

  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getAnime(id);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <AnimeDetails className="details">
        <div className="image">
          <img src={images?.jpg.large_image_url} alt=""></img>
        </div>
        <div className="anime-details">
          <p>
            <p>
              Japanese Title: <span>{title_japanese}</span>
            </p>
          </p>
          <p>
            <p>
              Rating: <span>{rating}</span>
            </p>
          </p>
          <p>
            <p>
              Aired: <span>{aired?.string}</span>
            </p>
          </p>
          <p>
            <p>
              Status: <span>{status}</span>
            </p>
          </p>
          <p>
            <p>
              Type: <span>{type}</span>
            </p>
          </p>
          <p>
            <p>
              Episodes: <span>{episodes}</span>
            </p>
          </p>
          <p>
            <p>
              Season: <span>{season}</span>
            </p>
          </p>
          <p>
            <p>
              Duration: <span>{duration}</span>
            </p>
          </p>
        </div>
      </AnimeDetails>
      <Description className="description">
      {synopsis && (showMore ? synopsis : synopsis.substring(0, 450) + "...")}
      <button onClick={() => {
        setShowMore(!showMore)
      }}>{showMore ? "Show Less" : "Show More"}</button>
    </Description>
    </div>
  );
}

const AnimeDetails = styled.div`
  display: flex;
  img {
    margin-right: 2rem;
    border-radius: 20px;
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
  h1,
  p {
    color: #be92f6;
    font-size: 16px;
  }
  span {
    color: white;
  }
`;
const Description = styled.div `
  color: white;
  button {
    background-color: #171618;
    border: 0;
    color: #BE92F6;
    font-weight: bold; 
    font-size: 16px;
    font-family: 'Josefin Sans';
    cursor: pointer;
  }
`

export default AnimeItem;
