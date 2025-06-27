// Load quotes from localStorage or use defaults
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
//         // Display a random quote based on selected category
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
//                                                           const newQuote = { text: quoteText, category: quoteCategory };
//                                                               quotes.push(newQuote);
//                                                                   saveQuotes();
//                                                                       populateCategories();
//                                                                           showRandomQuote();
//                                                                               document.getElementById("newQuoteText").value = "";
//                                                                                   document.getElementById("newQuoteCategory").value = "";
//
//                                                                                       postQuoteToServer(newQuote); // Post to mock server
//                                                                                         } else {
//                                                                                             alert("Please enter both quote and category.");
//                                                                                               }
//                                                                                               }
//
//                                                                                               // Create add-quote form
//                                                                                               function createAddQuoteForm() {
//                                                                                                 const formContainer = document.createElement("div");
//
//                                                                                                   const quoteInput = document.createElement("input");
//                                                                                                     quoteInput.id = "newQuoteText";
//                                                                                                       quoteInput.placeholder = "Enter a new quote";
//
//                                                                                                         const categoryInput = document.createElement("input");
//                                                                                                           categoryInput.id = "newQuoteCategory";
//                                                                                                             categoryInput.placeholder = "Enter quote category";
//
//                                                                                                               const addButton = document.createElement("button");
//                                                                                                                 addButton.textContent = "Add Quote";
//                                                                                                                   addButton.addEventListener("click", addQuote);
//
//                                                                                                                     formContainer.appendChild(quoteInput);
//                                                                                                                       formContainer.appendChild(categoryInput);
//                                                                                                                         formContainer.appendChild(addButton);
//
//                                                                                                                           document.body.appendChild(formContainer);
//                                                                                                                           }
//
//                                                                                                                           // Populate category dropdown
//                                                                                                                           function populateCategories() {
//                                                                                                                             const categoryFilter = document.getElementById("categoryFilter");
//                                                                                                                               if (!categoryFilter) return;
//
//                                                                                                                                 const uniqueCategories = [...new Set(quotes.map(q => q.category))];
//                                                                                                                                   categoryFilter.innerHTML = '<option value="all">All Categories</option>';
//                                                                                                                                     uniqueCategories.forEach(category => {
//                                                                                                                                         const option = document.createElement("option");
//                                                                                                                                             option.value = category;
//                                                                                                                                                 option.textContent = category;
//                                                                                                                                                     categoryFilter.appendChild(option);
//                                                                                                                                                       });
//
//                                                                                                                                                         const savedCategory = localStorage.getItem("selectedCategory");
//                                                                                                                                                           if (savedCategory) {
//                                                                                                                                                               categoryFilter.value = savedCategory;
//                                                                                                                                                                 }
//                                                                                                                                                                 }
//
//                                                                                                                                                                 // Filter quotes by category
//                                                                                                                                                                 function filterQuotes() {
//                                                                                                                                                                   const selectedCategory = document.getElementById("categoryFilter").value;
//                                                                                                                                                                     localStorage.setItem("selectedCategory", selectedCategory);
//                                                                                                                                                                       showRandomQuote();
//                                                                                                                                                                       }
//
//                                                                                                                                                                       // Export quotes to JSON
//                                                                                                                                                                       function exportToJsonFile() {
//                                                                                                                                                                         const dataStr = JSON.stringify(quotes, null, 2);
//                                                                                                                                                                           const blob = new Blob([dataStr], { type: "application/json" });
//                                                                                                                                                                             const url = URL.createObjectURL(blob);
//
//                                                                                                                                                                               const a = document.createElement("a");
//                                                                                                                                                                                 a.href = url;
//                                                                                                                                                                                   a.download = "quotes.json";
//                                                                                                                                                                                     a.click();
//                                                                                                                                                                                       URL.revokeObjectURL(url);
//                                                                                                                                                                                       }
//
//                                                                                                                                                                                       // Import quotes from JSON
//                                                                                                                                                                                       function importFromJsonFile(event) {
//                                                                                                                                                                                         const fileReader = new FileReader();
//                                                                                                                                                                                           fileReader.onload = function (e) {
//                                                                                                                                                                                               try {
//                                                                                                                                                                                                     const importedQuotes = JSON.parse(e.target.result);
//                                                                                                                                                                                                           if (Array.isArray(importedQuotes)) {
//                                                                                                                                                                                                                   quotes.push(...importedQuotes);
//                                                                                                                                                                                                                           saveQuotes();
//                                                                                                                                                                                                                                   alert("Quotes imported successfully!");
//                                                                                                                                                                                                                                           populateCategories();
//                                                                                                                                                                                                                                                   showRandomQuote();
//                                                                                                                                                                                                                                                         } else {
//                                                                                                                                                                                                                                                                 alert("Invalid JSON file.");
//                                                                                                                                                                                                                                                                       }
//                                                                                                                                                                                                                                                                           } catch {
//                                                                                                                                                                                                                                                                                 alert("Error parsing file.");
//                                                                                                                                                                                                                                                                                     }
//                                                                                                                                                                                                                                                                                       };
//                                                                                                                                                                                                                                                                                         fileReader.readAsText(event.target.files[0]);
//                                                                                                                                                                                                                                                                                         }
//
//                                                                                                                                                                                                                                                                                         // ----------------------
//                                                                                                                                                                                                                                                                                         // Server Sync & Conflict
//                                                                                                                                                                                                                                                                                         // ----------------------
//
//                                                                                                                                                                                                                                                                                         // Mock API URL for POST simulation
//                                                                                                                                                                                                                                                                                         const mockApiUrl = "https://jsonplaceholder.typicode.com/posts";
//
//                                                                                                                                                                                                                                                                                         // Simulate fetching quotes from server
//                                                                                                                                                                                                                                                                                         async function fetchQuotesFromServer() {
//                                                                                                                                                                                                                                                                                           return [
//                                                                                                                                                                                                                                                                                               { text: "Success is not final, failure is not fatal.", category: "Motivation" },
//                                                                                                                                                                                                                                                                                                   { text: "The only way to do great work is to love what you do.", category: "Work" }
//                                                                                                                                                                                                                                                                                                     ];
//                                                                                                                                                                                                                                                                                                     }
//
//                                                                                                                                                                                                                                                                                                     // Simulate posting a quote to the server
//                                                                                                                                                                                                                                                                                                     async function postQuoteToServer(quote) {
//                                                                                                                                                                                                                                                                                                       try {
//                                                                                                                                                                                                                                                                                                           await fetch(mockApiUrl, {
//                                                                                                                                                                                                                                                                                                                 method: "POST",
//                                                                                                                                                                                                                                                                                                                       headers: { "Content-Type": "application/json" },
//                                                                                                                                                                                                                                                                                                                             body: JSON.stringify(quote)
//                                                                                                                                                                                                                                                                                                                                 });
//                                                                                                                                                                                                                                                                                                                                   } catch (error) {
//                                                                                                                                                                                                                                                                                                                                       console.error("Failed to post quote to server:", error);
//                                                                                                                                                                                                                                                                                                                                         }
//                                                                                                                                                                                                                                                                                                                                         }
//
//                                                                                                                                                                                                                                                                                                                                         // Sync local data with server and resolve conflicts
//                                                                                                                                                                                                                                                                                                                                         async function syncQuotes() {
//                                                                                                                                                                                                                                                                                                                                           const serverQuotes = await fetchQuotesFromServer();
//                                                                                                                                                                                                                                                                                                                                             const localQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
//
//                                                                                                                                                                                                                                                                                                                                               const isDifferent = JSON.stringify(localQuotes) !== JSON.stringify(serverQuotes);
//
//                                                                                                                                                                                                                                                                                                                                                 if (isDifferent) {
//                                                                                                                                                                                                                                                                                                                                                     localStorage.setItem("quotes", JSON.stringify(serverQuotes));
//                                                                                                                                                                                                                                                                                                                                                         quotes = serverQuotes;
//                                                                                                                                                                                                                                                                                                                                                             populateCategories();
//                                                                                                                                                                                                                                                                                                                                                                 showRandomQuote();
//                                                                                                                                                                                                                                                                                                                                                                     alert("Quotes updated from server. Conflicts resolved.");
//                                                                                                                                                                                                                                                                                                                                                                       }
//                                                                                                                                                                                                                                                                                                                                                                       }
//
//                                                                                                                                                                                                                                                                                                                                                                       // Periodic sync every 30 seconds
//                                                                                                                                                                                                                                                                                                                                                                       setInterval(syncQuotes, 30000);
//
//                                                                                                                                                                                                                                                                                                                                                                       // ----------------------
//                                                                                                                                                                                                                                                                                                                                                                       // Event Listeners & Init
//                                                                                                                                                                                                                                                                                                                                                                       // ----------------------
//
//                                                                                                                                                                                                                                                                                                                                                                       document.getElementById("newQuote").addEventListener("click", showRandomQuote);
//                                                                                                                                                                                                                                                                                                                                                                       document.getElementById("categoryFilter").addEventListener("change", filterQuotes);
//                                                                                                                                                                                                                                                                                                                                                                       document.getElementById("exportBtn").addEventListener("click", exportToJsonFile);
//                                                                                                                                                                                                                                                                                                                                                                       document.getElementById("importFile").addEventListener("change", importFromJsonFile);
//
//                                                                                                                                                                                                                                                                                                                                                                       // On page load
//                                                                                                                                                                                                                                                                                                                                                                       createAddQuoteForm();
//                                                                                                                                                                                                                                                                                                                                                                       populateCategories();
//                                                                                                                                                                                                                                                                                                                                                                       syncQuotes();
//
//                                                                                                                                                                                                                                                                                                                                                                       const lastQuote = sessionStorage.getItem("lastQuote");
//                                                                                                                                                                                                                                                                                                                                                                       if (lastQuote) {
//                                                                                                                                                                                                                                                                                                                                                                         const quote = JSON.parse(lastQuote);
//                                                                                                                                                                                                                                                                                                                                                                           document.getElementById("quoteDisplay").innerHTML = `
//                                                                                                                                                                                                                                                                                                                                                                               <blockquote>"${quote.text}"</blockquote>
//                                                                                                                                                                                                                                                                                                                                                                                   <p><strong>Category:</strong> ${quote.category}</p>
//                                                                                                                                                                                                                                                                                                                                                                                     `;
//                                                                                                                                                                                                                                                                                                                                                                                     } else {
//                                                                                                                                                                                                                                                                                                                                                                                       showRandomQuote();
//                                                                                                                                                                                                                                                                                                                                                                                       }
//
