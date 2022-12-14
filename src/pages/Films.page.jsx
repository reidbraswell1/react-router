import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { filterFilmsByDirector } from "../helpers/film.helpers.js";
import { getListOf } from "../helpers/film.helpers.js";
import Footer from "../components/Footer.jsx";

function FilmsPage(props) {
    
    console.log(`---Begin Function FilmsList()---`);

    const [ list, setList ] = useState([]);
    const [ errorText, setErrorText ] = useState("");
    const [ errorTest, setErrorTest ] = useState(false);
    const [ searchDirector, setSearchDirector ] = useState("All");
    const [ directors, setDirectors ] = useState([]);

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
        if(errorTest) {
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
                console.log(`Data=`,data);
                setList(data);
                const directors = getListOf(data, "director");
                console.log(`Directors=`,directors)
                setDirectors(directors);
                setErrorText("");
            })
            .catch((err) => { 
                console.log(`${err} fetching from URL: ${URL}`);
                setList([]);
                setErrorText(`${err} fetching from URL: ${URL}`);
            });
        console.log(`---End FilmsList getFilms()---`);
    }
    
    const filmsByDirector = filterFilmsByDirector(list, searchDirector);

    return(
        <div className="container">
            <div className="row">
                <div className="col-4 my-center">
                    <h1 className="color-white">Studio Ghibli Films</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-4 my-center">
                    <form className="mt-2 mb-2">
                        <div className="form-group">
                            <label className="color-white" htmlFor="searchDirector">Director</label>
                            <select className="form-select mt-1" id="searchDirector" value={searchDirector} onChange={(e) => { setSearchDirector(e.target.value)} }>
                                <option value="All">All</option>
                                {directors.map((value) => {
                                    return(<option value={value}>{value}</option>);
                                }) }
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-5 my-center">
                    <h4 className="text-center color-white">Title - Director</h4>
                    <ul className="list-group border border-primary rounded">
                        {filmsByDirector.map((value,index,array) => {
                            return(
                                <li className="list-group-item" 
                                    key={value.id} 
                                    id={value.id}>{index+1}. {value.title} - {value.director}
                                </li>)})}
                    </ul>
                    <p className="error"><span className="color-red">{errorText}</span></p>
                    <Footer></Footer>
                </div>
            </div>
        </div>);

}
export { FilmsPage };
