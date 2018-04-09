import React, { Component } from 'react';
import axios from "axios";

let x = Math.floor(Math.random() * 100) + "";
let link = "https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&tmp=";


class API extends Component {
    constructor() {
        super();
        this.state = {
            quotes: []
        };

    }



    componentDidMount() {
        
        axios.get(link + x, true)
          .then(res => {
            const quotes = res.data[0].content;

            this.setState({ quotes:quotes.replace(/<(.|\n)*?>/g, '') });
            console.log(quotes);
          })
      }
    
    



    render() {
        return (
        
                <div>
                {this.state.quotes}
                <div>

                <a className="btn btn-primary" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + this.state.quotes} aria-label="Skip to main navigation">
                    <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                </a>
    
              </div>
            </div>
        );
    }
}

export default API;
