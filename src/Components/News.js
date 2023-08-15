import React, {useState, useEffect} from 'react';
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capatalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        document.title = `News Bulletin - ${capatalize(props.category)}`;
        update();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])   // problem here infinte api calls as useEffect runs multiple times, use [] to solve.  imp


    const update = async () => {  // Wll run after render() is done executing.
        props.changeProgress(10)

        const data = await fetch(process.env.REACT_APP_NEWS_API, {
            method: "POST",
            headers: {
                'User-Agent': 'News-Bulletin/1.0',
                'content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "country": props.country,
                "category": props.category,
                "page": page,
                "pageSize": props.pageSize
            })
        })
        props.changeProgress(30)
        const parsedData = await data.json()
        props.changeProgress(50)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        props.changeProgress(100)
    }

    const fetchMoreData = async () => {
        // duplicate problem due to setState is asynchronous  this.setState{page : this.state.page+1}
        const data = await fetch(process.env.REACT_APP_NEWS_API, {
            method: "POST",
            headers: {
                'User-Agent': 'News-Bulletin/1.0',
                'content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "country": props.country,
                "category": props.category,
                "page": page + 1,
                "pageSize": props.pageSize
            })
        })
        const parsedData = await data.json()
        setPage(page + 1)
        setArticles(articles.concat(parsedData.articles))
    }

    const showMenu = () => {
        const news = document.getElementById('news-div')
        const menu = document.getElementById('menu')
        const menuText = document.getElementById('menu-text')
        if (news.style.display === "block") {
            news.style.display = "none";
            menu.style.display = "block";
            menuText.textContent = "Close"
        } else {
            menu.style.display = "none";
            news.style.display = "block";
            menuText.textContent = "Menu"
        }
    }

    const countryName = (element) => {
        switch (element) {
            case "in":
                return "India"
            case "us":
                return "America"
            case "au":
                return "Australia"
            case "ca":
                return "Canada"
            default:
                return ""

        }
    }

    return (
        <div className={"container"}>
            <p className={"heading"}>{`Top ${countryName(props.country)}'s ${capatalize(props.category)} Headlines`}</p>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
                endMessage={
                    <p className={"scroll-end"}>
                        <b>You have reached the end.</b>
                    </p>
                }
            >
                <div className={"row"}>
                    {articles !== undefined && articles.length !== 0 ? articles.map((element, index) => {
                        return <NewsCard title={element.title.length>100?element.title.slice(0,100)+"...":element.title}
                                         description={element.content != null ?
                                             element.content.length>150?element.content.slice(0, 150)+"...":element.content.slice(0, -14)
                                             : element.description + "..."}
                                         key={index}
                                         img={!element.urlToImage ? "https://cdn.telanganatoday.com/wp-content/uploads/2022/08/iPhone-14-Pro-models-likely-to-come-with-new-ultra-wide-camera.jpg" : element.urlToImage}
                                         url={element.url} author={element.author}
                                         date={element.publishedAt}/>
                    }) : ""}
                </div>
            </InfiniteScroll>
            {/*</div>*/}
            {/*<div id={"menu-button"} onClick={showMenu}>*/}
            {/*    <span id={"menu-text"}>Menu1</span>*/}
            {/*</div>*/}
            {/*<Menu1 country={props.country} mode={props.mode} changeCountry={props.changeCountry}/>*/}
        </div>
    );
}


export default News;
