import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function FilmsPage(props) {
    
    console.log(`---Begin Function FilmsList()---`);

    const [ list, setList ] = useState([]);
    const [ errorText, setErrorText ] = useState("");

    useEffect(function () {
        console.log(`---Begin useEffect()---`);
        getFilms();
        console.log(`---End useEffect()---`);
    }, []);

    function getFilms() {
        console.log(`---Begin FilmsList getFilms()---`);
 
        const BAD_URL = "https://ghibliapi.herokuapp.com/filmss"
        const GOOD_URL = "https://ghibliapi.herokuapp.com/films"
        let URL = "";

        // Set URL to the good url or bad based on the errTest prop
        if(props.errTest) {
            URL = BAD_URL;
        }
        else {
            URL = GOOD_URL;
        }
        fetch(URL)
            .then((response) => {
                if(response.ok) { 
                    return response.json()
                }
                else {
                    throw new Error("Unknown Network Error Has Occurred");
                }
            })
            .then((data) => {
                console.log(data);
                setList(data);
                setErrorText("");
            })
            .catch((err) => { 
                console.log(`${err} fetching from URL: ${URL}`);
                setList([]);
                setErrorText(`${err} fetching from URL: ${URL}`);
            });
        console.log(`---End FilmsList getFilms()---`);
    }
    return(
        <div>
        <ul className="list-group">
            {list.map((value,index,array) => {
                return(
                        <li className="list-group-item" 
                            key={value.id} 
                            id={value.id}>{index+1}. {value.title} - {value.director}
                        </li>)})}
        </ul>
        <p className="error"><span className="color-red">{errorText}</span></p>
        </div>);

}

export default FilmsPage