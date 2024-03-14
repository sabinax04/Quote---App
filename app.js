const quotes = [
    {
      id: 1,
      quote: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero"
    },
    {
      id: 2,
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      id: 3,
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      id: 4,
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      id: 5,
      quote: "To succeed in life, you need two things: ignorance and confidence.",
      author: "Mark Twain"
    },
    {
      id: 6,
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      id: 7,
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      id: 8,
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      id: 9,
      quote: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      id: 10,
      quote: "The journey of a thousand miles begins with a single step.",
      author: "Lao Tzu"
    },
    {
      id: 11,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      id: 12,
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      id: 13,
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein"
    },
    {
      id: 14,
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      id: 15,
      quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
      author: "James Baldwin"
    },
    {
      id: 16,
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      id: 17,
      quote: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt"
    },
    {
      id: 18,
      quote: "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
      author: "Rocky Balboa"
    },
    {
      id: 19,
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      id: 20,
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    }
  ];

const button = document.querySelector(".button");
const text = document.querySelector(".common-second");


const originalQuotesArray = [...quotes];

function generateRandomQuote() {

    
    if (quotes.length === 0) {
       
        quotes.push(...originalQuotesArray);
    }
   
    const randomIndex = Math.floor(Math.random() * quotes.length);
    

    const randomQuote = quotes[randomIndex].quote;
    const randomAuthor = quotes[randomIndex].author;


    quotes.splice(randomIndex, 1);

    
    text.textContent = `"${randomQuote} - ${randomAuthor}"`;
   
}


button.addEventListener("click", generateRandomQuote);