// Quotes array with objects having text and category
// const quotes = [
//   { text: "Through hardship to the stars.", category: "Inspiration" },
//     { text: "Knowledge is power.", category: "School" },
//       { text: "Remember that you will die.", category: "Life" }
//       ];
//
//       // Function to display a random quote
//       function showRandomQuote() {
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
//                         // Function to add a new quote
//                         function addQuote() {
//                           const quoteText = document.getElementById("newQuoteText").value.trim();
//                             const quoteCategory = document.getElementById("newQuoteCategory").value.trim();
//
//                               if (quoteText && quoteCategory) {
//                                   quotes.push({ text: quoteText, category: quoteCategory });
//                                       showRandomQuote();
//                                           document.getElementById("newQuoteText").value = "";
//                                               document.getElementById("newQuoteCategory").value = "";
//                                                 }
//                                                 }
//
//                                                 // Create the form dynamically
//                                                 function createAddQuoteForm() {
//                                                   const formContainer = document.createElement("div");
//
//                                                     const quoteInput = document.createElement("input");
//                                                       quoteInput.id = "newQuoteText";
//                                                         quoteInput.placeholder = "Enter a new quote";
//
//                                                           const categoryInput = document.createElement("input");
//                                                             categoryInput.id = "newQuoteCategory";
//                                                               categoryInput.placeholder = "Enter quote category";
//
//                                                                 const addButton = document.createElement("button");
//                                                                   addButton.textContent = "Add Quote";
//                                                                     addButton.addEventListener("click", addQuote);
//
//                                                                       formContainer.appendChild(quoteInput);
//                                                                         formContainer.appendChild(categoryInput);
//                                                                           formContainer.appendChild(addButton);
//
//                                                                             document.body.appendChild(formContainer);
//                                                                             }
//
//                                                                             // Attach event listener to the existing button
//                                                                             document.getElementById("newQuote").addEventListener("click", showRandomQuote);
//
//                                                                             // Initialize form and show a quote on load
//                                                                             createAddQuoteForm();
//                                                                             showRandomQuote();
//
