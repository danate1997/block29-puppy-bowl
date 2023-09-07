import React from "react";
import { useParams } from "react-router-dom";
import { useGetPlayersByNameQuery } from "../PuppyApi";

const SinglePlayer = () => {
    const { name } = useParams();
    const {data, isLoading, isError } = useGetPlayersByNameQuery(name);

    if (isLoading) return <div>Loading Player Details...</div>;
    if(isError) return <div>Error Loading Player Details.</div>;

    return(
        <div>
            <h1>{data.player.name}</h1>
            <p>Breed: {player.breed}</p>
            <p>Team ID: {player.teamId}</p>
        </div>
    );
};


export default SinglePlayer;