import React from 'react';

const NewsCard = (props) => {
    let {title, description, img, url, author, date} = props
    return (
        <div className={"card"}>
            <div className={"img-div"}>
                <img src={img} alt={"..."} className={"img"}/>
            </div>
            <div className={"card-body"}>
                <div>
                    <h3>{title}</h3>
                    <p>{description ? description : "..."}</p>
                    <p><small>By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                </div>
                <button className="button active:scale-95" id="add_button">
                    <a className={"text"} href={url} target={"_blank"} rel={"noreferrer"}>Read More</a>
                </button>
            </div>
        </div>
    );

}


export default NewsCard;
