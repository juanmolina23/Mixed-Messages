const quotes = [
	{
		text:
			'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		author: 'Martin Fowler'
	},
	{
		text: 'First, solve the problem. Then, write the code.',
		author: 'John Johnson'
	},
	{
		text: 'Experience is the name everyone gives to their mistakes.',
		author: 'Oscar Wilde'
	},
	{
		text: 'In order to be irreplaceable, one must always be different',
		author: 'Coco Chanel'
	},
	{
		text: 'Java is to JavaScript what car is to Carpet.',
		author: 'Chris Heilmann'
	}
]
const stateArr = []

const randomNum = () => {
	let num = Math.floor(Math.random() * quotes.length)
	if (stateArr[stateArr.length - 1] == num) {
		num = Math.floor(Math.random() * quotes.length)
	}
	stateArr.push(num)
	return num
}

document.querySelector('button').addEventListener('click', () => {
	const quoteEl = document.querySelector('span')
	let randomNumber = randomNum()
	console.log(stateArr, randomNumber)
	const quote = quotes[randomNumber]
	quoteEl.textContent = `"${quote.text}" - ${quote.author}`
})
