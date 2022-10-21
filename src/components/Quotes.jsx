import React, { useEffect, useState } from "react";
import Axios from "axios";
import { data } from "../temp_data";

export default function Quotes() {
  let i = Math.floor(Math.random() * 50);
  const [quotes, setQuotes] = useState(data);
  const [quote, setQuote] = useState(quotes[i]);

  console.log(quote);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let i = Math.floor(Math.random() * 50);
      const qt = quotes[i];
      setQuote(qt);
      // 15 seconds  until new quote
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  // no api key

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {

  //         // const getQuotes = async () => {
  //         //     try {
  //         //         const data = await Axios.get("https://zenquotes.io/api/quotes");
  //         //         setQuotes(data)
  //         //         console.log(data);
  //         //     } catch (err) {
  //         //         console.log(err);
  //         //     }
  //         // };
  //         // getQuotes();
  //     }, 20000);
  //     return ()  => clearInterval
  //   },[]);

  return (
    <div className="quote-container">
      <blockquote>{quote.q}</blockquote>
      <p>
        <span className="author-text">{quote.a}</span>
      </p>
    </div>
  );
}
