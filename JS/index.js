function displayBooks(){ 
    const books=getBooks();
    var bookList=document.getElementsByClassName("bookList");
    bookList.innerHTML="";   //clear previous content
    if(books.length === 0){ 
        bookList.innerHTML="<p>No books available</p>";
    }
    else{ 
        books.forEach((book)=>{ console.log(book);
            var bookItem=document.createElement("div");
            bookItem.classList.add("book-list-item");
           
            //add book image
            var img=document.createElement("img");
            img.src=book.Image;
            img.alt=book.Title;
            //add book title 
            var title=document.createElement("h3");
            title.classList.add("book-title");
            title.textContent=book.Title;
            //add price
            var price=document.createElement("h3");
            price.classList.add("book-price");
            price.innerHTML=`₹${book.Price}`;
            // add buy tag
            var buy=document.createElement("a");
            buy.classList.add("buy");
            buy.innerHTML="Buy Now";

            console.log(book);
            //append all elements
            bookItem.appendChild(img);
            bookItem.appendChild(title);
            bookItem.appendChild(price);
            bookItem.appendChild(buy);
            bookList.appendChild(bookItem);
            console.log(book);
        });
    }
}
function getBooks()
{ 
    return JSON.parse(localStorage.getItem("books")) || [];
}
 displayBooks();

