import React from "react";
import { useState } from "react";

function Footer(props) {

    const [ footerText, setFooterText ] = useState("React Router 9/22");
    return (
        <div className="row mt-3">
            <footer className="col-4 my-center footer">
                <p>{footerText}</p>
            </footer>
        </div>);
}
export default Footer;