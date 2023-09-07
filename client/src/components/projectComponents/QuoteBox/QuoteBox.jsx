import React, { Component } from "react"
// import "./QuoteBox.css"
import "../../css/QuoteBox.css"
import Quotes from "../../../data/quotes.json"
import twitterLogo from "../../../images/twitter_t.png"
import { Colors } from './QuoteBoxColors'

class QuoteBox extends Component {
	constructor() {
		super()
		this.state = {
			quoteText: Quotes[0].quoteText,
			quoteAuthor: Quotes[0].quoteAuthor,
      bgColor: Colors[2],
		}
		this.newQuote = this.newQuote.bind(this)
    this.getRandomColor = this.getRandomColor.bind(this)
	}

	newQuote() {
    const newBackground = this.getRandomColor()
		const quoteArr = Quotes
		const quote = quoteArr[Math.floor(Math.random() * quoteArr.length)]
		this.setState({
			quoteText: quote.quoteText,
			quoteAuthor: quote.quoteAuthor,
      bgColor: newBackground
		});
	}

  getRandomColor() {
    let colors = Colors
    let min = 0;
    let max = 21;
    let result = Math.floor(Math.random() * (max - min) + min);
    return colors[result];
    }

    render() {
    return (
			<div className="quoteBoxArea">
        <h1 className="display-3">Quote Box</h1>
        <div id="quote-box" style = {{ backgroundColor: this.state.bgColor }}>
          <div id="text">
            <h2 className="quoteText display-6">{ this.state.quoteText }</h2>
          </div>
          <div id="author">
            <h4 className="quoteAuthor">{ this.state.quoteAuthor }</h4>
          </div>
          <button id="new-quote" onClick={ this.newQuote }>
            New Quote
          </button>
        </div>
        <a href="http://twitter.com/intent/tweet" id="tweet-quote">
            <img src={ twitterLogo } alt="logo" />
          </a>
			</div>
		)
	}
}

export default QuoteBox
