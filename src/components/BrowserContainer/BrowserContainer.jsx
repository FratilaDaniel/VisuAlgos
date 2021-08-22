import "./browserContainer.css";
import {  useState } from "react";

function BrowserContainer(){
    const [expanded, setExpanded] = useState(false);

    function handleChange(){
        setExpanded(currentExpanded => !currentExpanded);
    }

    return (
        <div id="browser-container">
            <input id="sidebar-toggle-i" type="checkbox" onClick={() => handleChange()}/>
            <label id="sidebar-toggle-l" for="sidebar-toggle-i">{expanded ? "<" : ">"}</label>
            {expanded 
                ?<div id="browser-content-expanded">here are all topics:</div>
                :<div id="browser-content">here are all topics:</div>
            }
            
        </div>
    );
}

export default BrowserContainer;
