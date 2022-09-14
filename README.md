# Exercise: React Router

## Part 1
This section covers setting up React Router with two pages, Home and Films.

### Exercise 1: Restructure Project Files
To clear space for React Router to be in App.jsx, move your existing code from there to a specific page component.

1. Create a new folder in src/ called pages/
1. Within pages/, create a new file called home.page.jsx
1. Copy the contents from App.jsx into home.page.jsx
1. Change the component name from App to HomePage
1. Remove the FilmsList component from the HomePage return statement (it will be it's own page component later 😉)
1. Your HomePage component should resemble:

```
import React, { useState } from "react";

export function HomePage() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["ready", "set", "GO"]);

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }

  return (
    <div>
      <h1>Learning React</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listitem"
          id="listitem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
```
### Exercise 2: Create a Films Page
Convert FilmsList to a page component.

1. Create a new file in pages/ called films.page.jsx
1. Copy the contents of components/FilmsList.jsx into films.page.jsx
1. Rename FilmsList to FilmsPage
1. Add to the return statement
    * wrap the `ul` in a `div`
    * add an `h1` element that says "Studio Ghibli Films"

Your FilmsPage should resemble:

```
import React, { useState, useEffect } from "react";

export function HomePage() {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <ul>
        {list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    </div>
  );
}
```

### Exercise 3: Export Pages

As a pattern, you may see `index.js` files used as single entry points for module exports. Although not required, that is what you will follow moving forward.

1. Create an index.js file in pages/
1. Import HomePage and FilmsPage
1. Export an object that contains both HomePage and FilmsPage by default
1. Your index.js file should resemble:

```
import { HomePage } from "./home.page";
import { FilmsPage } from "./films.page";

export { HomePage, FilmsPage };
```

### Exercise 4: Setup React Router

Setup React Router in `App.jsx`.

1. Use npm to install `react-router-dom` (from your terminal)
1. In `App.jsx`, import `BrowserRouter`, `NavLink`, `Routes` and `Route` from `react-router-dom`
1. Import HomePage and FilmsPage from the index.js file in pages/
1. Clear the current contents of App
1. Add a return statement that:
  * returns BrowserRouter
  * with Routes rendered as a child of BrowserRouter
  * with two Route components
    * HomePage should be rendered for "/"
    * FilmsPage should be rendered for "films"
1. Add a nav inside the BrowserRouter above the Routes
  * with a `ul` of two `li`
  * each `li` should contain a `NavLink`
  * match one `NavLink's` to prop to `"/"`, and give it text that displays "Home"
  * match the other `NavLink's` to prop to `"films"`, and give it text that displays "Films"


## Part 2

This section covers adding filter functionality to the Films list by director.

### Exercise 1: Setup Filter Elements
Open films.page.jsx.

1. Declare another piece of state, searchDirector and setSearchDirector, that will be destructured from the return of useState("")
1. Add a form to the return statement beneath the existing h1
1. Add a div with class name form-group inside of the form
1. Add a label and select inside of the div.form-group
  * set the select's value prop to the searchDirector state
  * set the select's onChange prop to a function that calls setSearchDirector and updates searchDirector with the chose option value
  * add a single option to the select (for now) with the value set to "" and text content displaying "All"

### Exercise 2: Helper Functions for Film Directors

Create some helper functions that can be used with the Studio Ghibli film data.

1. Create a new folder in src/ called helpers/
1. Create a file in helpers/ called film.helpers.js
1. In film.helpers.js, create and export a function called filterFilmsByDirector
1. In film.helpers.js, create and export a function called getListOf


### Exercise 3: filterFilmsByDirector

The goal of filterFilmsByDirector, as per the name, is to receive list (array) and director (string) parameters, and return a filtered list of films where only the films by a the specified director are included.

For example:

```
Input:
list - [
        { title: "Castle in the Sky", director: "Hayao Miyazaki" },
        { title: "Grave of the Fireflies", director: "Isao Takahata" },
        { title: "My Neighbor Totoro", director: "Hayao Miyazaki" }
      ]
director - "Hayao Miyazaki"

Output:
[
  { title: "Castle in the Sky", director: "Hayao Miyazaki" },
  { title: "My Neighbor Totoro", director: "Hayao Miyazaki" }
]
```

1. Implement filterFilmsByDirector
1. Once done, import filterFilmsByDirector in films.page.jsx
1. Call filterFilmsByDirector before your return statement
  * pass in list (state) and searchDirector (state) as parameters
  * assign the result to a variable called filmsByDirector
1. In your return statement, change `list.map(...)` to `filmsByDirector.map(...)`

### Exercise 4: `getListOf`

The goal of `getListOf` is to receive `list` (array) and `prop` (string) parameters, and return a cumulative list of items including every unique value that exists in the list at the specified property.

For example:

```
Input:
list - [
        { firstName: "Frodo", lastName: "Baggins" },
        { firstName: "Bilbo", lastName: "Baggins" },
        { firstName: "Sam" lastName: "Gamgee" }
      ]
prop - "lastName"

Output:
["Baggins", "Gamgee"]
```

1. Implement `getListOf`
1. Once done, import `getListOf` in `films.page.jsx`
1. Call `getListOf` before your return statement
  * pass in `list` (state) and `"director"` as parameters
  * assign the result to a variable called `directors`
1. In your return statement, within your `select` and below the `<option value="">All</option>`
  * use the `map` array method to return a new array of `option` elements, one per item in `directors`
  * the `value` prop and text content should both be set to the director



