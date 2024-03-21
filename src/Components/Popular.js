import React from "react";
import { useGlobalContext } from "../Context/global";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Popular() {
    const { popularAnime, isSearch } = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch){
            return popularAnime.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url}></img>
                </Link>
            })
        }
    };

    return (
        <PopularStyle>
            <div className="popular-anime">
                {conditionalRender()}
            </div>
        </PopularStyle>
    )
}

const PopularStyle = styled.div`
    display: flex;
    .popular-anime{
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 10rem;
        padding-left: 2rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 5rem;
        a{
            height: 500px;
            border-radius: 20px;
        }
        a img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }
`;

export default Popular