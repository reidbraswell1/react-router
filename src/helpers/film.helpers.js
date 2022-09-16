import { React } from "react"

function filterFilmsByDirector(searchList, searchDirector) {
    
    let filteredList = [];
    
    searchList.map((value, index, array) => {
        if(value.director === searchDirector) {
            let filteredElement = {};
            filteredElement.title = value.title;
            filteredElement.director = value.director;
            filteredList.push(filteredElement);
        }
    });
    return filteredList;
}


function getListOf(searchList, property) {

    console.log(`---Begin Function getListOf()---`);

    let resultArray = [];

    searchList.map((value, index, array) => {
        if(resultArray.indexOf(value[property]) < 0) {
            resultArray.push(value[property]);
        }
    })

    console.log(`---End Function getListOf()---`);
    return resultArray;
}

export { filterFilmsByDirector, getListOf };