import React, { Component } from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      news: [],
    };
  }

  componentDidMount = () => {
    axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`).then(
      (res) => {
        const news = res.data;
        news.forEach(hack => {
          const url = `https://hacker-news.firebaseio.com/v0/item/${hack}.json`
          axios.get(url).then(
            (res) => {
              const news = res.data;
              this.data.push(news)
              this.setState({ news: this.data });
            })
            .catch(err => console.error(err))
        });

      })
  }

  render() {
    const {news} = this.state;
    return (
        <div className="Home">
        {news.map(item => (
          <div className="container" key={item.id}>
            <div className="card blue-grey darken-1" >
                <div className="card-content white-text">
                <span className="card-title">{item.title}</span>
                <p> Score : {item.score}</p>
                <br/>
                <a href={item.url} className="waves-effect waves-light btn">Learn More </a>
                </div>
            </div>
            </div>
          ))}      
       </div>
    );
  }
}

export default Home;
