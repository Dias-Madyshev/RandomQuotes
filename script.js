const quotes = [
	{ quote: 'The best dreams happen when you’re awake', author: 'Cherie Gilderbloom' },
	{ quote: 'Success is not the key to happiness. Happiness is the key to success', author: 'Herman Cain' },
	{ quote: 'To have another language is to possess a second soul', author: 'Charlemagne' },
	{ quote: 'Happiness is not something ready-made. It comes from your own actions', author: 'Dalai Lama' },
	{
		quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends',
		author: 'Martin Luther King Jr.',
	},
	{
		quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail',
		author: 'Ralph Waldo Emerson',
	},
	{ quote: 'You must be the change you wish to see in the world', author: 'Mahatma Gandhi' },
	{ quote: 'Success usually comes to those who are too busy to be looking for it', author: 'Henry David Thoreau' },
	{ quote: 'Life is what happens when you’re busy making other plans', author: 'John Lennon' },
	{ quote: 'It is never too late to be what you might have been', author: 'George Eliot' },
]

const GetQuote = document.getElementById('GetQuote')
const ButtonQuote = document.getElementById('ButtonQuote')
const AuthorQuote = document.getElementById('author')

const GetQuoteClickButton = () => {
	const randomQuotesCount = Math.floor(Math.random() * quotes.length)
	const randomQuote = quotes[randomQuotesCount]

	const { author, quote } = randomQuote
	// Правильное создание строки с цитатой

	AuthorQuote.innerHTML = author
	GetQuote.innerHTML = quote
}

ButtonQuote.addEventListener('click', GetQuoteClickButton)
