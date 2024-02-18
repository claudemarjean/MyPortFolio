import React from "react";
import About from "./main/About";
import Blog from "./main/Blog";
import Service from "./main/Service";

const Main = () =>{
    return(
        <main id="main" >
            <About/>
            <Service/>
            <Blog/>
        </main>
    );
}

export default Main;