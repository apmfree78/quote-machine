import React from 'react';

class QuoteBox extends React.Component {

  render() {

    const {quote,author} = this.props.displayedQuote;
    const pickQuote = this.props.pickQuote;
    const tweet = "https://https://twitter.com/intent/tweet?hashtags=quotes&text=\""+quote+"\""+author;
   
    return (
      <div id="quote-box">
        <quoteblock className="fa fa-quote-left" id="text">
          {" " + quote}
          <address id="author">{author}</address>
        </quoteblock>
        <div id="buttons">
          <a href={tweet} className="fa fa-twitter" id="tweet-quote"></a>
          <button type="submit" id="new-quote" onClick={pickQuote}>New Quote</button>
        </div>
      </div>

    );
  }
}

export default QuoteBox;