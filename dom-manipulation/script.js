// Load quotes from localStorage or use default ones
// let quotes = JSON.parse(localStorage.getItem("quotes")) || [
//   { text: "Through hardship to the stars.", category: "Inspiration" },
//     { text: "Knowledge is power.", category: "School" },
//       { text: "Remember that you will die.", category: "Life" }
//       ];
//
//       // Save quotes to localStorage
//       function saveQuotes() {
//         localStorage.setItem("quotes", JSON.stringify(quotes));
//         }
//
//         // Display a quote from selected category
//         function showRandomQuote() {
//           const selectedCategory = document.getElementById("categoryFilter")?.value || "all";
//             const filteredQuotes = selectedCategory === "all"
//                 ? quotes
//                     : quotes.filter(q => q.category === selectedCategory);
//
//                       if (filteredQuotes.length === 0) {
//                           document.getElementById("quoteDisplay").innerHTML = "<p>No quotes in this category.</p>";
//                               return;
//                                 }
//
//                                   const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
//                                     document.getElementById("quoteDisplay").innerHTML = `
//                                         <blockquote>"${randomQuote.text}"</blockquote>
//                                             <p><strong>Category:</strong> ${randomQuote.category}</p>
//                                               `;
//
//                                                 sessionStorage.setItem("lastQuote", JSON.stringify(randomQuote));
//                                                 }
//
//                                                 // Add a new quote
//                                                 function addQuote() {
//                                                   const quoteText = document.getElementById("newQuoteText").value.trim();
//                                                     const quoteCategory = document.getElementById("newQuoteCategory").value.trim();
//
//                                                       if (quoteText && quoteCategory) {
//                                                           quotes.push({ text: quoteText, category: quoteCategory });
//                                                               saveQuotes();
//                                                                   document.getElementById("newQuoteText").value = "";
//                                                                       document.getElementById("newQuoteCategory").value = "";
//                                                                           populateCategories(); // update dropdown
//                                                                               showRandomQuote();
//                                                                                 } else {
//                                                                                     alert("Please enter both quote and category.");
//                                                                                       }
//                                                                                       }
//
//                                                                                       // Create add-quote form
//                                                                                       function createAddQuoteForm() {
//                                                                                         const formContainer = document.createElement("div");
//
//                                                                                           const quoteInput = document.createElement("input");
//                                                                                             quoteInput.id = "newQuoteText";
//                                                                                               quoteInput.placeholder = "Enter a new quote";
//
//                                                                                                 const categoryInput = document.createElement("input");
//                                                                                                   categoryInput.id = "newQuoteCategory";
//                                                                                                     categoryInput.placeholder = "Enter quote category";
//
//                                                                                                       const addButton = document.createElement("button");
//                                                                                                         addButton.textContent = "Add Quote";
//                                                                                                           addButton.addEventListener("click", addQuote);
//
//                                                                                                             formContainer.appendChild(quoteInput);
//                                                                                                               formContainer.appendChild(categoryInput);
//                                                                                                                 formContainer.appendChild(addButton);
//
//                                                                                                                   document.body.appendChild(formContainer);
//                                                                                                                   }
//
//                                                                                                                   // Populate dropdown with unique categories
//                                                                                                                   function populateCategories() {
//                                                                                                                     const categoryFilter = document.getElementById("categoryFilter");
//                                                                                                                       if (!categoryFilter) return;
//
//                                                                                                                         const uniqueCategories = [...new Set(quotes.map(q => q.category))];
//                                                                                                                           categoryFilter.innerHTML = '<option value="all">All Categories</option>';
//                                                                                                                             uniqueCategories.forEach(category => {
//                                                                                                                                 const option = document.createElement("option");
//                                                                                                                                     option.value = category;
//                                                                                                                                         option.textContent = category;
//                                                                                                                                             categoryFilter.appendChild(option);
//                                                                                                                                               });
//
//                                                                                                                                                 const savedCategory = localStorage.getItem("selectedCategory");
//                                                                                                                                                   if (savedCategory) {
//                                                                                                                                                       categoryFilter.value = savedCategory;
//                                                                                                                                                         }
//                                                                                                                                                         }
//
//                                                                                                                                                         // Filter and display quote by category
//                                                                                                                                                         function filterQuotes() {
//                                                                                                                                                           const selectedCategory = document.getElementById("categoryFilter").value;
//                                                                                                                                                             localStorage.setItem("selectedCategory", selectedCategory);
//                                                                                                                                                               showRandomQuote();
//                                                                                                                                                               }
//
//                                                                                                                                                               // Export quotes to JSON file
//                                                                                                                                                               function exportToJsonFile() {
//                                                                                                                                                                 const dataStr = JSON.stringify(quotes, null, 2);
//                                                                                                                                                                   const blob = new Blob([dataStr], { type: "application/json" });
//                                                                                                                                                                     const url = URL.createObjectURL(blob);
//
//                                                                                                                                                                       const a = document.createElement("a");
//                                                                                                                                                                         a.href = url;
//                                                                                                                                                                           a.download = "quotes.json";
//                                                                                                                                                                             a.click();
//                                                                                                                                                                               URL.revokeObjectURL(url);
//                                                                                                                                                                               }
//
//                                                                                                                                                                               // Import quotes from uploaded JSON file
//                                                                                                                                                                               function importFromJsonFile(event) {
//                                                                                                                                                                                 const fileReader = new FileReader();
//                                                                                                                                                                                   fileReader.onload = function (e) {
//                                                                                                                                                                                       try {
//                                                                                                                                                                                             const importedQuotes = JSON.parse(e.target.result);
//                                                                                                                                                                                                   if (Array.isArray(importedQuotes)) {
//                                                                                                                                                                                                           quotes.push(...importedQuotes);
//                                                                                                                                                                                                                   saveQuotes();
//                                                                                                                                                                                                                           alert("Quotes imported successfully!");
//                                                                                                                                                                                                                                   populateCategories();
//                                                                                                                                                                                                                                           showRandomQuote();
//                                                                                                                                                                                                                                                 } else {
//                                                                                                                                                                                                                                                         alert("Invalid file format.");
//                                                                                                                                                                                                                                                               }
//                                                                                                                                                                                                                                                                   } catch {
//                                                                                                                                                                                                                                                                         alert("Could not parse file.");
//                                                                                                                                                                                                                                                                             }
//                                                                                                                                                                                                                                                                               };
//                                                                                                                                                                                                                                                                                 fileReader.readAsText(event.target.files[0]);
//                                                                                                                                                                                                                                                                                 }
//
//                                                                                                                                                                                                                                                                                 // Add event listeners
//                                                                                                                                                                                                                                                                                 document.getElementById("newQuote").addEventListener("click", showRandomQuote);
//                                                                                                                                                                                                                                                                                 document.getElementById("categoryFilter").addEventListener("change", filterQuotes);
//                                                                                                                                                                                                                                                                                 document.getElementById("exportBtn").addEventListener("click", exportToJsonFile);
//                                                                                                                                                                                                                                                                                 document.getElementById("importFile").addEventListener("change", importFromJsonFile);
//
//                                                                                                                                                                                                                                                                                 // Initialize
//                                                                                                                                                                                                                                                                                 createAddQuoteForm();
//                                                                                                                                                                                                                                                                                 populateCategories();
//
//                                                                                                                                                                                                                                                                                 // Show last viewed quote on load
//                                                                                                                                                                                                                                                                                 const lastQuote = sessionStorage.getItem("lastQuote");
//                                                                                                                                                                                                                                                                                 if (lastQuote) {
//                                                                                                                                                                                                                                                                                   const quote = JSON.parse(lastQuote);
//                                                                                                                                                                                                                                                                                     document.getElementById("quoteDisplay").innerHTML = `
//                                                                                                                                                                                                                                                                                         <blockquote>"${quote.text}"</blockquote>
//                                                                                                                                                                                                                                                                                             <p><strong>Category:</strong> ${quote.category}</p>
//                                                                                                                                                                                                                                                                                               `;
//                                                                                                                                                                                                                                                                                               } else {
//                                                                                                                                                                                                                                                                                                 showRandomQuote();
//                                                                                                                                                                                                                                                                                                 }
//
