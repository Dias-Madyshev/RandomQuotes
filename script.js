const quotes = [
	'If you fall asleep now, you will dream. If you study now, you will live your dream',
	'When you think it’s too late, the truth is, it’s still early ',
	'The pain of studying is only temporary. But the pain of not knowing — ignorance — is forever',
	'Studying is not about time. It’s about effort',
	'Life is not all about studying. But if you can’t even conquer this little part of life, then what else can you possibly do?',
]
const GetQuote = document.getElementById('GetQuote')
const ButtonQuote = document.getElementById('ButtonQuote')

const GetQuoteClickButton = () => {
	const randomQuotesCount = Math.floor(Math.random() * quotes.length)
	const randomQuote = quotes[randomQuotesCount]

	GetQuote.textContent = randomQuote
}
ButtonQuote.addEventListener('click', GetQuoteClickButton)

GetQuoteClickButton()
