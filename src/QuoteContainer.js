import { useState } from 'react';
import { quotes } from './quotes.json';
import Quote from './Quote';

const QuoteContainer = () => {
	const randomIdx = Math.floor(Math.random() * 102);

	const [
		quote,
		setQuote
	] = useState(quotes[randomIdx].quote);
	const [
		author,
		setAuthor
	] = useState(quotes[randomIdx].author);

	function randomQuote() {
		const randomIdx = Math.floor(Math.random() * 102);
		setQuote(quotes[randomIdx].quote);
		setAuthor(quotes[randomIdx].author);
	}
	return (
		<div>
			<Quote quote={quote} author={author} newQuote={randomQuote} />
		</div>
	);
};

export default QuoteContainer;
