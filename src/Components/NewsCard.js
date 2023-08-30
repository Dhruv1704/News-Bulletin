import React from 'react';

const NewsCard = (props) => {
    let {title, description, img, url, author, date, mode} = props
    return (
        <div className={`card ${mode==="Dark"?"card-dark":"card-light"}`}>
            <div className={"img-div"}>
                <img src={img} alt={"..."} className={"img"}/>
            </div>
            <div className={"card-body"}>
                <div>
                    <h3>{title}</h3>
                    <p>{description ? description : "..."}</p>
                    <p><small>By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                </div>
                <div className={`${mode==="Dark"?"dark-button":"button"} active:scale-95`}>
                    <a className={`${mode==="Dark"?"dark-text":"text"}`} href={url} target={"_blank"} rel={"noreferrer"}>Read More</a>
                </div>
            </div>
        </div>
    );

}


export default NewsCard;
