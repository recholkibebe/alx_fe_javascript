let quotes = JSON.parse(localStorage.getItem("quotes")) || [
	  { text: "Through hardship to the stars.", category: "Inspiration" },
	  { text: "Knowledge is power.", category: "School" },
	  { text: "Remember that you will die.", category: "Life" }
];

function saveQuotes() {
	  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function showRandomQuote() {
	  const selectedCategory = document.getElementById("categoryFilter")?.value || "all";
	  const filteredQuotes = selectedCategory === "all"
	    ? quotes
	    : quotes.filter(q => q.category === selectedCategory);

	  if (filteredQuotes.length === 0) {
		      document.getElementById("quoteDisplay").innerHTML = "<p>No quotes in this category.</p>";
		      return;
		    }

	  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
	  const quote = filteredQuotes[randomIndex];

	  const quoteDisplay = document.getElementById("quoteDisplay");
	  quoteDisplay.innerHTML = `
	      <blockquote>"${quote.text}"</blockquote>
	          <p><strong>Category:</strong> ${quote.category}</p>
		    `;
	  sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}

function addQuote() {
	  const quoteText = document.getElementById("newQuoteText").value.trim();
	  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

	  if (quoteText && quoteCategory) {
		      quotes.push({ text: quoteText, category: quoteCategory });
		      saveQuotes();
		      showRandomQuote();
		      document.getElementById("newQuoteText").value = "";
		      document.getElementById("newQuoteCategory").value = "";
		      populateCategories(); // Refresh category list
		    } else {
			        alert("Please enter both quote text and category.");
			      }
}

function createAddQuoteForm() {
	  const formContainer = document.createElement("div");

	  const quoteInput = document.createElement("input");
	  quoteInput.id = "newQuoteText";
	  quoteInput.placeholder = "Enter a new quote";

	  const categoryInput = document.createElement("input");
	  categoryInput.id = "newQuoteCategory";
	  categoryInput.placeholder = "Enter quote category";

	  const addButton = document.createElement("button");
	  addButton.textContent = "Add Quote";
	  addButton.addEventListener("click", addQuote);

	  formContainer.appendChild(quoteInput);
	  formContainer.appendChild(categoryInput);
	  formContainer.appendChild(addButton);

	  document.body.appendChild(formContainer);
}

function exportToJsonFile() {
	  const dataStr = JSON.stringify(quotes, null, 2);
	  const blob = new Blob([dataStr], { type: "application/json" });
	  const url = URL.createObjectURL(blob);

	  const a = document.createElement("a");
	  a.href = url;
	  a.download = "quotes.json";
	  a.click();
	  URL.revokeObjectURL(url);
}

function importFromJsonFile(event) {
	  const fileReader = new FileReader();
	  fileReader

