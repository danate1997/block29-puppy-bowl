import React from "react";
import { useGetPlayersQuery } from "../PuppyApi";
import { Link } from "react-router-dom";

const AllPlayers = () => {
    const { data, isLoading, isError } = useGetPlayersQuery();

    if (isLoading) {
        return <div>Loading Players...</div>;
    }
    if (isError) {
        return <div>Error Loading Players...</div>;
    }
    // console.log(data.data.players)
    return(
        <div>
            <ul>
                {data.data.players.map((player, index) => (
                    <li key={index}>
                        {player.name}
                        <br></br>
                        <Link to={`/players/${player.name}`}>Details</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default AllPlayers;