

  function displayBorrowed() {
    const borrowedBooks = getBorrowed();
    const borrowedContainer = document.querySelector(".borrowed");
  
    if (!borrowedContainer) {
      console.error("Borrowed container element not found");
      return;
    }
  
    // Clear previous content
    borrowedContainer.innerHTML = "";
  
    if (borrowedBooks.length === 0) {
      borrowedContainer.innerHTML = "<p>No books borrowed yet!</p>";
    
     
    } else {
     
      const fragment = document.createDocumentFragment();
      borrowedBooks.forEach((book,index) => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
        
            <img src="${book.Image}" alt="${book.Title} cover">
            <h3 class="book-title">${book.Title}</h3>
            <h2 class="book-author">> ${book.Author}</h2>
            <h3 class="book-price">₹ ${book.Price}  <button class="delete" onclick = deleteBook(${index})> ✖</button></h3>
           
    
       
        `;
        fragment.appendChild(bookItem);
      });
      borrowedContainer.appendChild(fragment);
    } 
  }
  function deleteBook(index)
  { 
    const borrowedBooks = getBorrowed();
    borrowedBooks.splice(index,1);
    if(borrowedBooks.length===0){ 
      placeOrder=document.querySelector('.place_order');
        placeOrder.style.display="none";
      location.reload();
    }
    saveBorrowed(borrowedBooks);
    displayBorrowed();
  }
  function getBorrowed()
{ 
  const books=localStorage.getItem("borrowed");
  return books ? JSON.parse(books) : [];
}
function saveBorrowed(borrowed)
{ 
  localStorage.setItem("borrowed",JSON.stringify(borrowed));
}


  document.addEventListener("DOMContentLoaded", () => {
    displayBorrowed();
  });

  let order=getBorrowed();
if(order.length===0)
{ 
  placeOrder=document.querySelector('.place_order');
  placeOrder.style.display="none";
}