



function addBooks()
{  
    
    let takenItems={ 
        Title:document.getElementById("title").value,
        Price:document.getElementById("price").value,
        Image:document.getElementById("image").value,
        Category:document.getElementById("category").value,

    };
    if(takenItems.Title==="" || takenItems.Price==="" || takenItems.Image==="" || takenItems.Category==="")
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
      document.getElementById("image").value='';
      document.getElementById("category").value='';
   displayTable();
   
}
function getBooks()
{ 
    const books=localStorage.getItem("books");
    return books ? JSON.parse(books) : [];
}
function saveBooks(books)
{ 
    localStorage.setItem("books",JSON.stringify(books));
}
function displayTable()
{ 
    const books=getBooks();
    var bookList=document.getElementsByClassName("book-table-data");
    bookList.innerHTML="";
    books.forEach((book)=>{ 
       var tr=document.createElement("tr");
       var td1=document.createElement("td");
       td1.textContent=book.Category;
       var td2=document.createElement("td");
       td2.textContent=book.Image;
       var td3=document.createElement("td");
       td3.textContent=book.Title;
       var td4=document.createElement("td");
       td4.textContent=book.Price;
       var td5=document.createElement("td");
       td5.textContent=` `;
       //append all elements
       tr.appendChild(td1);
       tr.appendChild(td2);
       tr.appendChild(td3);
       tr.appendChild(td4);
       tr.appendChild(td5);
       bookList.appendChild(tr);
      
    });
}
displayTable();