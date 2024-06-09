import { useState } from "react";
import "./RandomQuote.css";

const RandomQuote = () => {
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitter = ()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
  }
  loadQuotes();
  return (
    <div className="box">
      <div className="container">
        <div className="quote">{quote.text}</div>
        <div className="line">
          <div className="bottom">
            <div className="author">{quote.author.split(',')[0]}</div>
            <div className="buttons">
              <button className="reload" onClick={()=>{random()}}>reload</button>
              <button className="share" onClick={twitter}>share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
