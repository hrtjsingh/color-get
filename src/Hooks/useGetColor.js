import React, { useState } from 'react'
import axios from "axios";
function useGetColor(input) {
    const [getColors, setGetColors] = useState("")
    
    async function getData(query) {
        let results = await axios.get(
            `https://api.color.pizza/v1/names/?name=${query}`
        );
        setGetColors(results.data.colors)
    }
    getData(input);
    return {
        getColors
    }
}
export default useGetColor