import React from "react";
import { useState } from "react";
import Footer from "../components/Footer.jsx";

function HomePage(props) {

    console.log(`---Begin Function App()---`);

    const [ list, setList ] = useState(["ready", "set", "GO"]);
    const [ text, setText ] = useState("");
    const [ errorTest, setErrorTest ] = React.useState(false);

    function onSubmit(event) {
        event.preventDefault();
    
        let newList = [...list, text];
        setList(newList);
        setText("");
    }

    return(<div className="container">
            <div className="row">
              <div className="col-4 text-center my-center mt-3">
                <h1 className="color-white">React Routes</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-3 border border-primary rounded my-center background-color-white">
                    <form className="mt-3 mb-2" onClick={onSubmit}>
                      <p>To delete an item enter it's number only!</p>
                        <div className="form-group">
              <label htmlFor="toDoInput">Add to do item </label>
              <input id="toDoInput" 
                     className="mb-1 form-control" 
                     value={text} 
                     onChange={(e) => setText(e.target.value)}>
              </input>
              <button className="m-2 btn btn-primary" type="submit" name="Add" value="Add">Add</button>
              <button className="m-2 btn btn-danger" type="submit" name="Delete" value="Delete">Delete</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-4">
          <h4 className="color-white">To Do List</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-3 border border-primary rounded mt-2 my-center background-color-white">
        <ul className="list-group mt-2 mb-2">
        {list.map((item, idx) => {
          let listId = `List:${idx}`;
          let listText = `(${idx+1}.) ${item}`;
          return <li className="list-group-item" key={listId} id={listId}>{item}</li>;
        })}
      </ul>
        </div>
      <Footer></Footer>
    </div>

            </div>)
}
export { HomePage };