let arr=[
    {
        Author: "Percival Everett",
        Category: "Fiction",
        Image: "./images/james.jpeg",
        Price: "566",
        Title: "James",
    },
    {
        Author: "Kaveh Akbar",
        Category: "Fiction",
        Image: "./images/Martyr!.jpg",
        Price: "1000",
        Title: "Martyr!",
    },
    {
        Author: "Daniel Mason",
        Category: "Fiction",
        Image: "./images/north woods.jpeg",
        Price: "999",
        Title: "North Woods",
    },
    {
        Author: "Ariel Lawhon ",
        Category: "Fiction",
        Image : "./images/the-frozen-river-2.jpg",
        Price:   "499",
        Title:  "The-Frozen-River",
       
    },
    {
        Author :  "Callie Hart",
        Category :"Fiction",
        Image :"./images/Quicksilver.jpeg",
        Price : "899",
        Title :"Quicksilver",

    },
    {
        Author : " John Grisham and Jim McCloskey",
        Category :"Non-Fiction",
        Image :"./images/framed.jpeg",
        Price :"990",
        Title : "Framed: Astonishing True Stories of Wrongful Convictions",
    },
    {
        Author :" Mel Robbins",
        Category :"Non-Fiction",
        Image :"./images/The let them theory.jpeg",
        Price :"1129",
        Title :"The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About",
    },
    {
        Author :"Alex van Halen",
        Category :"Non-Fiction",
        Image : "./images/brothers.jpeg",
        Price :"1599",
        Title :"Brothers",
    },
    {
        Author :  "Shari Franke",
        Category :"Non-Fiction",
        Image :"./images/the house of my mother.jpeg",
        Price :"399",
        Title : "The House of My Mother: A Daughter's Quest for Freedom",
    },
    {
        Author :"By Truman Capote",
        Category :"Non-Fiction",
        Image :"./images/in cold blood.webp",
        Price :"799",
        Title :"In Cold Blood",
    },
    {
        Author :"By John Hersey",
        Category :"Non-Fiction",
        Image :"./images/hiroshima.webp",
        Price :"699",
        Title :"Hiroshima",
    },
    {
        Author :"By Stephen Hawking",
        Category :"Non-Fiction",
        Image :"./images/a brief history of time.webp",
        Price : "899",
        Title :"A Brief History of Time",
    },
    {
        Author : "Wilkie Collins",
        Category :"Thriller",
        Image : "./images/thewomaninwhite.webp",
        Price :"850",
        Title :"The Woman in White",
    },
    {
        Author :"Fyodor Dostoevsky",
        Category :"Thriller",
        Image :"./images/crime and punishment.webp",
        Price :"750",
        Title :"Crime and Punishment",
    },
    {
        Author :"Anna Katharine Green",
        Category :"Thriller",
        Image : "./images/theleavenworthcase.webp",
        Price :"850",
        Title :"The Leavenworth Case",
    },
    {
        Author :"Henry James",
        Category :"Thriller",
        Image :"./images/theturnofthescrew.webp",
        Price :"455",
        Title :"The Turn of the Screw",
    },
    {
        Author :" Arthur Conan Doyle",
        Category :"Thriller",
        Image :"./images/thehoundofthebaskervilles.webp",
        Price :"566",
        Title :"The Hound of the Baskervilles",
    },
    {
        Author :"Agatha Christie",
        Category :"Thriller",
        Image :"./images/theMurderofrogerackroyd.webp",
        Price :"999",
        Title :"The Murder of Roger Ackroyd",
    },
    {
        Author :"Margery Allingham",
        Category :"Thriller",
        Image :"./images/thecrimeatblackdudley.webp",
        Price :"429",
        Title :"The Crime at Black Dudley",
    },
    {
        Author :"Mignon G. Eberhart",
        Category :"Thriller",
        Image :"./images/thepatientinroom18.webp",
        Price :"456",
        Title :"The Patient in Room 18",
    },
    // {
    //     Author :
    //     Category :
    //     Image :
    //     Price :
    //     Title :
    // },
    // {
    //     Author :
    //     Category :
    //     Image :
    //     Price :
    //     Title :
    // },
    // {
    //     Author :
    //     Category :
    //     Image :
    //     Price :
    //     Title :
    // },
    // {
    //     Author :
    //     Category :
    //     Image :
    //     Price :
    //     Title :
    // },
    // {
    //     Author :
    //     Category :
    //     Image :
    //     Price :
    //     Title :
    // },
    // {
    //     Author :
    //     Category :
    //     Image :
    //     Price :
    //     Title :
    // },
    // {
    //     Author :
    //     Category :
    //     Image :
    //     Price :
    //     Title :
    // },
    // {
    //     Author :
    //     Category :
    //     Image :
    //     Price :
    //     Title :
    // },



   
];
// Store the array of objects in localStorage
localStorage.setItem('arr', JSON.stringify(arr));

// Retrieve the array of objects from localStorage
const storedArray = JSON.parse(localStorage.getItem('arr'));

// Accessing objects from the retrieved array
console.log(storedArray);

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
