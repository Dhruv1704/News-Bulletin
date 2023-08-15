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
        const cards = document.getElementsByClassName("card");
        const menuBars = document.getElementsByClassName("bm-burger-bars")
        const btn = document.getElementsByClassName("button")
        const btnText = document.getElementsByClassName("text")
        if (mode === "Light") {
            setMode("Dark")
            document.getElementById("page-wrap").style.background = "#181a1b"
            document.getElementById("navbar").style.background = "black"
            document.body.style.color = "white"
            for (const card of cards) {
                card.style.background = "black"
            }
            for (const menuBar of menuBars) {
                menuBar.style.background = "white"
            }
            for (let i = 0; i < btn.length; i++) {
                btn[i].classList.add("dark-button")
                btnText[i].classList.add("dark-text")
            }
        } else {
            setMode("Light")
            document.getElementsByClassName("bm-burger-bars")[0].style.background = "black"
            document.getElementById("page-wrap").style.background = "white"
            document.getElementById("navbar").style.background = "white"
            document.body.style.color = "black"
            for (const card of cards) {
                card.style.background = "white"
            }
            for (const menuBar of menuBars) {
                menuBar.style.background = "black"
            }
            for (let i = 0; i < btn.length; i++) {
                btn[i].classList.remove("dark-button")
                btnText[i].classList.remove("dark-text")
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
                                              pageSize={pageSize}/>}/>
                        <Route exact path={`/${country}/business`}
                               element={<News changeProgress={changeProgress} key={`${country} business`}
                                              category={"business"}
                                              country={country}
                                              pageSize={pageSize}/>}/>
                        <Route exact path={`/${country}/entertainment`}
                               element={<News changeProgress={changeProgress} key={`${country} entertainment`}
                                              category={"entertainment"}
                                              country={country}
                                              pageSize={pageSize}/>}/>
                        <Route exact path={`/${country}/general`}
                               element={<News changeProgress={changeProgress} key={`${country} general`}
                                              category={"general"}

                                              country={country} pageSize={pageSize}/>}/>
                        <Route exact path={`/${country}/health`}
                               element={<News changeProgress={changeProgress} key={`${country} health`}
                                              category={"health"}
                                              country={country}
                                              pageSize={pageSize}/>}/>
                        <Route exact path={`/${country}/science`}
                               element={<News changeProgress={changeProgress} key={`${country} science`}
                                              category={"science"}
                                              country={country}
                                              pageSize={pageSize}/>}/>
                        <Route exact path={`/${country}/sports`}
                               element={<News changeProgress={changeProgress} key={`${country} sports`}
                                              category={"sports"}

                                              country={country}
                                              pageSize={pageSize}/>}/>
                        <Route exact path={`/${country}/technology`}
                               element={<News changeProgress={changeProgress} key={`${country} technology`}
                                              category={"technology"}
                                              country={country}
                                              pageSize={pageSize}/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
