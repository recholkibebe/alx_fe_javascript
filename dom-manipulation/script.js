// Sample array of quotes
// const quotes = [
//   { text: "Through hardship to the stars.", category: "Inspiration" },
//     { text: "Knowledge is power.", category: "School" },
//       { text: "Remember that you will die.", category: "Life" },
//       ];
//
//       // Function to display a random quote
//       function displayRandomQuote() {
//         const randomIndex = Math.floor(Math.random() * quotes.length);
//           const quote = quotes[randomIndex];
//
//             const quoteDisplay = document.getElementById("quoteDisplay");
//               quoteDisplay.innerHTML = `
//                   <blockquote>"${quote.text}"</blockquote>
//                       <p><strong>Category:</strong> ${quote.category}</p>
//                         `;
//                         }
//
//                         // Function to create the form for adding new quotes
//                         function createAddQuoteForm() {
//                           const formContainer = document.createElement("div");
//
//                             const quoteInput = document.createElement("input");
//                               quoteInput.id = "newQuoteText";
//                                 quoteInput.type = "text";
//                                   quoteInput.placeholder = "Enter a new quote";
//
//                                     const categoryInput = document.createElement("input");
//                                       categoryInput.id = "newQuoteCategory";
//                                         categoryInput.type = "text";
//                                           categoryInput.placeholder = "Enter quote category";
//
//                                             const addButton = document.createElement("button");
//                                               addButton.textContent = "Add Quote";
//                                                 addButton.onclick = addQuote;
//
//                                                   formContainer.appendChild(quoteInput);
//                                                     formContainer.appendChild(categoryInput);
//                                                       formContainer.appendChild(addButton);
//
//                                                         document.body.appendChild(formContainer);
//                                                         }
//
//                                                         // Function to add a new quote
//                                                         function addQuote() {
//                                                           const quoteText = document.getElementById("newQuoteText").value.trim();
//                                                             const quoteCategory = document.getElementById("newQuoteCategory").value.trim();
//
//                                                               if (quoteText && quoteCategory) {
//                                                                   quotes.push({ text: quoteText, category: quoteCategory });
//                                                                       alert("Quote added successfully!");
//                                                                           document.getElementById("newQuoteText").value = "";
//                                                                               document.getElementById("newQuoteCategory").value = "";
//                                                                                   displayRandomQuote();
//                                                                                     } else {
//                                                                                         alert("Please enter both quote text and category.");
//                                                                                           }
//                                                                                           }
//
//                                                                                           // Initialize
//                                                                                           document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
//                                                                                           createAddQuoteForm();
//                                                                                           displayRandomQuote(); // Show one quote when the page loads
//
