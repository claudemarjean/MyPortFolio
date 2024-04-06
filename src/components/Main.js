import React from "react";
import About from "./main/About";
import Blog from "./main/Blog";
import Service from "./main/Service";
import Cursus from "./main/Cursus";
import Accordion from "./main/Accordion"

const Main = () =>{
    return(
        <main id="main" >
            <About/>
            <Cursus/>
            <Service/>
            <Accordion/>
            <Blog/>
        </main>
    );
}

export default Main;