
// Initial array of quotes
let quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", category: "Inspirational" },
    { text: "The purpose of our lives is to be happy.", category: "Life" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" }
  ];
  
  // Function to show a random quote
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = quotes[randomIndex].text;
  }
  
  // Function to add a new quote
  function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  
    if (newQuoteText && newQuoteCategory) {
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
      alert('New quote added successfully!');
    } else {
      alert('Please enter both a quote and a category.');
    }
  }
  
  // Function to create the add quote form
  function createAddQuoteForm() {
    const container = document.createElement('div');
    container.className = 'input-container';
  
    const quoteInput = document.createElement('input');
    quoteInput.id = 'newQuoteText';
    quoteInput.type = 'text';
    quoteInput.placeholder = 'Enter a new quote';
  
    const categoryInput = document.createElement('input');
    categoryInput.id = 'newQuoteCategory';
    categoryInput.type = 'text';
    categoryInput.placeholder = 'Enter quote category';
  
    const addButton = document.createElement('button');
    addButton.id = 'addQuote';
    addButton.textContent = 'Add Quote';
    addButton.addEventListener('click', addQuote);
  
    container.appendChild(quoteInput);
    container.appendChild(categoryInput);
    container.appendChild(addButton);
  
    document.body.appendChild(container);
  }
  
  // Initialize the application
  function init() {
    document.getElementById('newQuote').addEventListener('click', showRandomQuote);
    createAddQuoteForm();
  }