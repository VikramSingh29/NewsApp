import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../Styles/disable.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles ,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }




  async componentDidMount() {
   this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles)
      });
    });
  };
  

  render() {
    return (
      <>
        <h1 className=" text-center" style={{ fontSize: "3.5em", margin:'100px 0px 60px' }}>
          NewsApp - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row ">
          {
            this.state.articles.map((elem, index) => {
              return (
                <div className="col-md-3 " key={`${elem.url}-${index}`}>
                  <NewsItem
                    title={elem.title}
                    description={elem.description}
                    urlToImage={elem.urlToImage}
                    url={elem.url}
                    author={elem.author}
                    publishedAt={elem.publishedAt}
                    source={elem.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
    
      </>
    );
  }
}

export default News;
