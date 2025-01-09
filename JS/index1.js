function displayBooks(){ 
    const books=getBooks();
    var bookList=document.getElementsByClassName("bookList");
    // bookList.innerHTML="";   //clear previous content
    if(books.length === 0){ 
        bookList.innerHTML="<p>No books available</p>";
    }
    else{ 
       // books.forEach((book)=>{ 
           // console.log(book.Title)
           for(let i=0;i<books.length;i++){
            var bookItem=document.createElement("div");
            bookItem.classList.add("book-list-item");
           bookItem.innerHTML=`
           <img src="${books[i].Image}" alt="${books[i].Title} cover">
            <h3 class="book-title">${books[i].Title}</h3>
            <h3 class="book-price"><strong>Price:</strong> ${books[i].Price}</h3>
            <a class="buy">Buy Now</a>
            `;
          bookList.innerHTML+= bookItem;
           }
        //});
    }
}
function displayCategory()
{ 
    const books =getBooks();
    var catItem=document.getElementsByClassName("catItem");
    console.log(catItem)
    // catItem.innerHTML="";
    books.forEach((book)=>{ 
       var li= document.createElement("li");
       li.innerHTML=book.Category;
       catItem.innerHTML += (li);
       console.log(catItem.innerHTML)
    });
}
function getBooks()
{ 
    // return JSON.parse(localStorage.getItem("books")) || [];
    const books=localStorage.getItem("books");
    console.log(books);
    return books ? JSON.parse(books) : [];
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

 displayBooks();
displayCategory();
