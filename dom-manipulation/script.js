let quotes = JSON.parse(localStorage.getItem("quotes")) || [
	  { text: "Through hardship to the stars.", category: "Inspiration" },
	  { text: "Knowledge is power.", category: "School" },
	  { text: "Remember that you will die.", category: "Life" }
];

function saveQuotes() {
	  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function showRandomQuote() {
	  const randomIndex = Math.floor(Math.random() * quotes.length);
	  const quote = quotes[randomIndex];

	  const quoteDisplay = document.getElementById("quoteDisplay");
	  quoteDisplay.innerHTML = `
	      <blockquote>"${quote.text}"</blockquote>
	          <p><strong>Category:</strong> ${quote.category}</p>
		    `;

	  // Save last viewed quote to sessionStorage
	//   sessionStorage.setItem("lastQuote", JSON.stringify(quote));
	//   }
	//
	//   function addQuote() {
	//     const quoteText = document.getElementById("newQuoteText").value.trim();
	//       const quoteCategory = document.getElementById("newQuoteCategory").value.trim();
	//
	//         if (quoteText && quoteCategory) {
	//             quotes.push({ text: quoteText, category: quoteCategory });
	//                 saveQuotes();
	//                     showRandomQuote();
	//                         document.getElementById("newQuoteText").value = "";
	//                             document.getElementById("newQuoteCategory").value = "";
	//                               }
	//                               }
	//
	//                               function createAddQuoteForm() {
	//                                 const formContainer = document.createElement("div");
	//
	//                                   const quoteInput = document.createElement("input");
	//                                     quoteInput.id = "newQuoteText";
	//                                       quoteInput.placeholder = "Enter a new quote";
	//
	//                                         const categoryInput = document.createElement("input");
	//                                           categoryInput.id = "newQuoteCategory";
	//                                             categoryInput.placeholder = "Enter quote category";
	//
	//                                               const addButton = document.createElement("button");
	//                                                 addButton.textContent = "Add Quote";
	//                                                   addButton.addEventListener("click", addQuote);
	//
	//                                                     formContainer.appendChild(quoteInput);
	//                                                       formContainer.appendChild(categoryInput);
	//                                                         formContainer.appendChild(addButton);
	//
	//                                                           document.body.appendChild(formContainer);
	//                                                           }
	//
	//                                                           // ✅ Export quotes to JSON
	//                                                           function exportToJsonFile() {
	//                                                             const dataStr = JSON.stringify(quotes, null, 2);
	//                                                               const blob = new Blob([dataStr], { type: "application/json" });
	//                                                                 const url = URL.createObjectURL(blob);
	//
	//                                                                   const a = document.createElement("a");
	//                                                                     a.href = url;
	//                                                                       a.download = "quotes.json";
	//                                                                         a.click();
	//                                                                           URL.revokeObjectURL(url);
	//                                                                           }
	//
	//                                                                           // ✅ Import from uploaded JSON file
	//                                                                           function importFromJsonFile(event) {
	//                                                                             const fileReader = new FileReader();
	//                                                                               fileReader.onload = function (e) {
	//                                                                                   try {
	//                                                                                         const importedQuotes = JSON.parse(e.target.result);
	//                                                                                               if (Array.isArray(importedQuotes)) {
	//                                                                                                       quotes.push(...importedQuotes);
	//                                                                                                               saveQuotes();
	//                                                                                                                       alert("Quotes imported successfully!");
	//                                                                                                                               showRandomQuote();
	//                                                                                                                                     } else {
	//                                                                                                                                             alert("Invalid JSON format");
	//                                                                                                                                                   }
	//                                                                                                                                                       } catch {
	//                                                                                                                                                             alert("Failed to parse JSON");
	//                                                                                                                                                                 }
	//                                                                                                                                                                   };
	//                                                                                                                                                                     fileReader.readAsText(event.target.files[0]);
	//                                                                                                                                                                     }
	//
	//                                                                                                                                                                     // ✅ Attach to existing elements in HTML
	//                                                                                                                                                                     document.getElementById("newQuote").addEventListener("click", showRandomQuote);
	//                                                                                                                                                                     document.getElementById("exportBtn").addEventListener("click", exportToJsonFile);
	//                                                                                                                                                                     document.getElementById("importFile").addEventListener("change", importFromJsonFile);
	//
	//                                                                                                                                                                     // Start the app
	//                                                                                                                                                                     createAddQuoteForm();
	//
	//                                                                                                                                                                     // Show last quote or a new one
	//                                                                                                                                                                     const lastQuote = sessionStorage.getItem("lastQuote");
	//                                                                                                                                                                     if (lastQuote) {
	//                                                                                                                                                                       const quote = JSON.parse(lastQuote);
	//                                                                                                                                                                         document.getElementById("quoteDisplay").innerHTML = `
	//                                                                                                                                                                             <blockquote>"${quote.text}"</blockquote>
	//                                                                                                                                                                                 <p><strong>Category:</strong> ${quote.category}</p>
	//                                                                                                                                                                                   `;
	//                                                                                                                                                                                   } else {
	//                                                                                                                                                                                     showRandomQuote();
	//                                                                                                                                                                                     }
	//
