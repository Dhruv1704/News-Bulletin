import './App.css';
import React, {useState} from 'react';
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Menu from "./Components/Menu";

const App = () => {
    const pageSize = 8

    const [progress, setProgress] = useState(0);
    const [country, setCountry] = useState("in");
    const [mode, setMode] = useState("Light");

    const changeProgress = (progress) => {
        setProgress(progress)
    }

    const changeCountry = (country) => {
        setCountry(country)
    }

    const toggleMode = () => {
        const themeColorMeta = document.getElementById('theme-color');
        const menuBars = document.getElementsByClassName("bm-burger-bars")
        if (mode === "Light") {
            setMode("Dark")
            themeColorMeta.setAttribute('content', "#000000");
            document.getElementById("page-wrap").style.background = "#181a1b"
            document.getElementById("navbar").style.background = "black"
            document.body.style.color = "white"
            for (const menuBar of menuBars) {
                menuBar.style.background = "white"
            }
        } else {
            setMode("Light")
            themeColorMeta.setAttribute('content', "#ffffff");
            document.getElementsByClassName("bm-burger-bars")[0].style.background = "black"
            document.getElementById("page-wrap").style.background = "white"
            document.getElementById("navbar").style.background = "white"
            document.body.style.color = "black"
            for (const menuBar of menuBars) {
                menuBar.style.background = "black"
            }
        }
    }

    return (
        <div id="outer-container">
            <BrowserRouter>
                <Menu changeCountry={changeCountry} country={country}/>
                <main id="page-wrap">
                <Navbar mode={mode} toggleMode={toggleMode}/>
                    <LoadingBar
                        height={3}
                        color={"#00adee"}
                        progress={progress}
                        onLoaderFinished={() => changeProgress(0)}
                    />
                    <Routes>
                        <Route exact path="/"
                               element={<News changeProgress={changeProgress} key={`${country} general`}
                                              category={"general"}
                                              country={"in"}
                                              pageSize={pageSize} mode={mode}/>}/>
                        <Route exact path={`/${country}/business`}
                               element={<News changeProgress={changeProgress} key={`${country} business`}
                                              category={"business"}
                                              country={country}
                                              pageSize={pageSize} mode={mode}/>}/>
                        <Route exact path={`/${country}/entertainment`}
                               element={<News changeProgress={changeProgress} key={`${country} entertainment`}
                                              category={"entertainment"}
                                              country={country}
                                              pageSize={pageSize} mode={mode}/>}/>
                        <Route exact path={`/${country}/general`}
                               element={<News changeProgress={changeProgress} key={`${country} general`}
                                              category={"general"}
                                              country={country} pageSize={pageSize} mode={mode}/>}/>
                        <Route exact path={`/${country}/health`}
                               element={<News changeProgress={changeProgress} key={`${country} health`}
                                              category={"health"}
                                              country={country}
                                              pageSize={pageSize} mode={mode}/>}/>
                        <Route exact path={`/${country}/science`}
                               element={<News changeProgress={changeProgress} key={`${country} science`}
                                              category={"science"}
                                              country={country}
                                              pageSize={pageSize} mode={mode}/>}/>
                        <Route exact path={`/${country}/sports`}
                               element={<News changeProgress={changeProgress} key={`${country} sports`}
                                              category={"sports"}
                                              country={country}
                                              pageSize={pageSize} mode={mode}/>}/>
                        <Route exact path={`/${country}/technology`}
                               element={<News changeProgress={changeProgress} key={`${country} technology`}
                                              category={"technology"}
                                              country={country}
                                              pageSize={pageSize} mode={mode}/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
