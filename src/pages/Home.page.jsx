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
                <h1>React Routes</h1>
              </div>
            </div>
            <div className="row">
                <div className="col-4 my-center">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label for="listitem">List Item</label>
                            <input
                                className="form-control"
                                type="text"
                                name="listitem"
                                id="listitem"
                                value={text}
                                onChange={(e) => setText(e.target.value)}/>
                        <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-3 my-center">
              <div className="col-5 my-center">
                <h5 className="text-center">Film Title - Director</h5>
              </div>
            </div>
            <Footer></Footer>
          </div>)
}
export { HomePage };