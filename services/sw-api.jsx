import { useEffect, useState } from "react";
import StarshipCard from "../components/StarshipCard";


export function GetAllStarships() {
    const [starship, setStarship] = useState(); 
    
    const fetchStarshipData = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/starships/'); 
            const data = await response.json(); 
            setStarship(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchStarshipData();
    }, [])

    return (
        <>
            {starship && starship.results.map((ship) => (
                <StarshipCard key={ship.name} name={ship.name}/>
            ))}
        </>
    )
}