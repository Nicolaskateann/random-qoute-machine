import React, { useState } from "react";
import "./QuoteMachine.css"; // Custom styles (we'll create this later)

const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" }
];

const QuoteMachine = () => {
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    const getNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div id="quote-box" className="card p-4 text-center shadow-lg">
                <h3 id="text" className="mb-3">"{quote.text}"</h3>
                <p id="author" className="mb-4">- {quote.author}</p>
                <div className="d-flex justify-content-between">
                    <a
                        id="tweet-quote"
                        className="btn btn-primary"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tweet
                    </a>
                    <button id="new-quote" className="btn btn-success" onClick={getNewQuote}>
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuoteMachine;
