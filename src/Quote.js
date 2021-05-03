import './quote.css';
const Quote = ({ quote, author, newQuote }) => {
	return (
		<div className="quote-container">
			<div className="quote-text">
				<span>{quote}</span>
			</div>
			<div className="quote-author">
				<span>{author}</span>
			</div>
			<div className="buttons-container">
				{/* href="https://twitter.com/share?ref_src=twsrc%5Etfw" */}
				<button onClick={() => newQuote()}>New Quote</button>
			</div>
		</div>
	);
};

export default Quote;
