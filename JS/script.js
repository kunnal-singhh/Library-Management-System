function addBooks()
{  
    
    let takenItems={ 
        Title:document.getElementById("title").value,
        Price:document.getElementById("price").value,
        Author:document.getElementById("author").value,
        Image:document.getElementById("image").value,
        Category:document.getElementById("category").value,

    };
    if(takenItems.Title==="" || takenItems.Price==="" || takenItems.Image==="" || takenItems.Category==="" || takenItems.Author==="")
    { 
       alert("Please fill the fields"); 
       return;
    }
    const books=getBooks();
    books.push(takenItems);
      
      //store in local storage
     
      saveBooks(books);

      document.getElementById("title").value='';
      document.getElementById("price").value='';
      document.getElementById("author").value='';
      document.getElementById("image").value='';
      document.getElementById("category").value='';
   displayTable();
   
}
function getBooks()
{ 
    const books=localStorage.getItem("arr");
    return books ? JSON.parse(books) : [];
}
function saveBooks(books)
{ 
    localStorage.setItem("books",JSON.stringify(books));
}
function displayTable() {
    const books = getBooks();
    const bookList = document.querySelector(".book-table-data");
    if (!bookList) {
        console.error("Table body with class 'book-table-data' not found");
        return;
    }
    bookList.innerHTML = "";

    books.forEach((book,index) => {
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.textContent = book.Category;

        const td2 = document.createElement("td");
        const img = document.createElement("img");
        img.onerror = () => console.error("Image not found:", book.Image);
        img.src = book.Image;
        img.alt = book.Title;
        img.style.width = "50px";
        td2.appendChild(img);

        const td3 = document.createElement("td");
        td3.textContent = book.Title;

        const td4 = document.createElement("td");
        td4.textContent = book.Author;


        const td5 = document.createElement("td");
        td5.classList.add("td5");
        td5.textContent = `₹ ${book.Price}`;

        const td6 = document.createElement("td");
              td6.classList.add("editAndDelete");
        const editButton = document.createElement("button");
        editButton.innerHTML = "&#9998;"; // HTML code for edit (🖉)
        editButton.classList.add("edit-button");
        editButton.onclick = () => editBook(index); // Attach edit functionality

        // Add Delete Symbol
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#128465;"; // HTML code for delete (🗑️)
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = () => deleteBook(index); // Attach delete functionality

        // Append buttons
        td6.appendChild(editButton);
        td6.appendChild(deleteButton);

      
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
         tr.appendChild(td6);

        bookList.appendChild(tr);
    });
}
function deleteBook(index) {
    const books = getBooks();
    books.splice(index, 1); // Remove the book at the specified index
    saveBooks(books); // Save updated list to localStorage
    displayTable(); // Refresh the table
}
function editBook(index) {
    const books = getBooks();
    const book = books[index]; // Get the book to edit

    // Populate input fields with the book's current data
    document.getElementById("title").value = book.Title;
    document.getElementById("author").value = book.Author;
    document.getElementById("price").value = book.Price;
    document.getElementById("image").value = book.Image;
    document.getElementById("category").value = book.Category;

    // Remove the old book and update on submission
    books.splice(index, 1);
    saveBooks(books);
    displayTable();
}
displayTable();
