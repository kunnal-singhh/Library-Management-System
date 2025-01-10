function displayBooks() {
    const books = getBooks();
    const bookList = document.querySelector(".bookList"); // Use querySelector for a single element
    if (!bookList) {
        console.error("bookList element not found");
        return;
    }
    bookList.innerHTML = ""; // Clear previous content

    if (books.length === 0) {
        bookList.innerHTML = "<p>No books available</p>";
    } else {
        const fragment = document.createDocumentFragment();
        books.forEach((book,index) => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-list-item");
            bookItem.innerHTML = `
                <img src="${book.Image}" alt="${book.Title} cover">
                <h3 class="book-title">${book.Title}</h3>
                <h2 class="book-author">> ${book.Author}</h2>
                <h3 class="book-price"> ₹ ${book.Price}</h3>
                <button class="borrow" >Borrow</button>
                 
            `;
            fragment.appendChild(bookItem); 

        });
        bookList.appendChild(fragment); // Append all items at once
    }
    
}
// function displayCategory() {
//     const books = getBooks();
//     const catList = document.querySelector(".catItem"); // Use querySelector for a single element
//     if (!catList) {
//         console.error("catItem element not found");
//         return;
//     }
//     catList.innerHTML = ""; // Clear previous content

//     books.forEach((book) => {
//         const li = document.createElement("li");
//         li.textContent = book.Category;
//         catList.appendChild(li);
//     });
// }

function getBooks() {
    const books = localStorage.getItem("books");
    try {
        return books ? JSON.parse(books) : [];
    } catch (e) {
        console.error("Error parsing books from localStorage", e);
        return [];
    }
}
function popup(){
    console.log("press");
    var loginForm = document.getElementById("container2");
    if (loginForm.style.display === "none") {
      loginForm.style.display = "flex"; // Show the form
    // } else {
    //   loginForm.style.display = "none"; // Hide the form
    // }
  }
}


let username = document.getElementById('username');
let password = document.getElementById('password');

    let validUsername = "admin"
    let validPassword = "admin@12345"

    function validatation(){
      
        if(username.value === ""){
            alert('username cannot be empty');
            return false;
        
        }   
        if(password.value === ""){
            alert('password cannot be empty');
            return false;
        }
        
        if(username.value === validUsername && password.value === validPassword){
            alert('login successful');
            window.open('../addBook.html')
            return true;
        }
        else{
            alert('login failed');
            return false;
        }
    }
    // function borrow(index){
    //     window.open('../borrow.html');
    //     const books=getBooks();
    //     const borrowed=document.querySelector(".borrowed");
    //     if(index){ 
    //         console.error("borrowed book not found");
    //         return;
    //     }
    //     borrowed.innerHTML="";
    //     else{ 
    //         const fragment = document.createDocumentFragment();
             
    //         const bookItem = document.createElement("div");
    //         bookItem.classList.add("book-item");
    //         bookItem.innerHTML = `
    //             <img src="${books[index].Image}" alt="${books[index].Title} cover">
    //             <h3 class="book-title">${books[index].Title}</h3>
    //             <h2 class="book-author">> ${books[index].Author}</h2>
    //             <h3 class="book-price"> ₹ ${books[index].Price}</h3>
    //            <p class="borrowedMsg">You have borrowed the book</p>
    //         `;
    //         fragment.appendChild(bookItem);
      

    //     }
       
    // }

// Call functions
displayBooks();
// displayCategory();
