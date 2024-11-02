import React, { Component } from "react";
import "../Styles/Card.css";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, publishedAt, author, source } =
      this.props;
    const placeholderImage = "https://via.placeholder.com/200";
    const truncatedTitle = title
      ? title.length > 45
        ? title.slice(0, 45) + "..."
        : title
      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed nesciunt, ";
    const truncatedDescription = description
      ? description.length > 50
        ? description.slice(0, 50) + "..."
        : description
      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed !";

    return (
      <div className="my-3 ">
        <div className="card" style={{height:500}}>
          <img
            src={urlToImage || placeholderImage}
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
          <span
              className="position-relative top-0  translate-middle badge rounded-pill bg-danger"
              style={{ display:'inline',textAlign:'center'}}
            >
              {source?source:'Unknown'}
            </span>
            <h5 className="card-title my-3">{truncatedTitle}</h5>
            <p className="card-text">{truncatedDescription}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author? author:" Unknown"}, {new Date(publishedAt).toUTCString()}
              </small>
            </p>
          
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-small btn-dark "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
