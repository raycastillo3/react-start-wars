import { useEffect, useState } from "react";

export function GetAllStarships() {
    const [starship, setStarship] = useState(null); 
    
    const fetchStarshipData = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/starships/'); 
            const data = await response.json(); 
            // console.log(data);
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
        {starship && starship.results.map((el) => el.name )}
        </>
    )
}