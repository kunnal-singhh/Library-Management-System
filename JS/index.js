let borrowed=[];
let arr = [
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
    Image: "./images/the-frozen-river-2.jpg",
    Price: "499",
    Title: "The-Frozen-River",
  },
  {
    Author: "Callie Hart",
    Category: "Fiction",
    Image: "./images/Quicksilver.jpeg",
    Price: "899",
    Title: "Quicksilver",
  },
  {
    Author: " John Grisham and Jim McCloskey",
    Category: "Non-Fiction",
    Image: "./images/framed.jpeg",
    Price: "990",
    Title: "Framed",
  },
  {
    Author: " Mel Robbins",
    Category: "Non-Fiction",
    Image: "./images/The let them theory.jpeg",
    Price: "1129",
    Title:
      "The Let Them Theory",
  },
  {
    Author: "Alex van Halen",
    Category: "Non-Fiction",
    Image: "./images/brothers.jpeg",
    Price: "1599",
    Title: "Brothers",
  },
  {
    Author: "Shari Franke",
    Category: "Non-Fiction",
    Image: "./images/the house of my mother.jpeg",
    Price: "399",
    Title: "The House of My Mother",
  },
  {
    Author: "By Truman Capote",
    Category: "Non-Fiction",
    Image: "./images/in cold blood.webp",
    Price: "799",
    Title: "In Cold Blood",
  },
  {
    Author: "By John Hersey",
    Category: "Non-Fiction",
    Image: "./images/hiroshima.webp",
    Price: "699",
    Title: "Hiroshima",
  },
  {
    Author: "By Stephen Hawking",
    Category: "Non-Fiction",
    Image: "./images/a brief history of time.webp",
    Price: "899",
    Title: "A Brief History of Time",
  },
  {
    Author: "Wilkie Collins",
    Category: "Thriller",
    Image: "./images/thewomaninwhite.webp",
    Price: "850",
    Title: "The Woman in White",
  },
  {
    Author: "Fyodor Dostoevsky",
    Category: "Thriller",
    Image: "./images/crime and punishment.webp",
    Price: "750",
    Title: "Crime and Punishment",
  },
  {
    Author: "Anna Katharine Green",
    Category: "Thriller",
    Image: "./images/theleavenworthcase.webp",
    Price: "850",
    Title: "The Leavenworth Case",
  },
  {
    Author: "Henry James",
    Category: "Thriller",
    Image: "./images/theturnofthescrew.webp",
    Price: "455",
    Title: "The Turn of the Screw",
  },
  {
    Author: " Arthur Conan Doyle",
    Category: "Thriller",
    Image: "./images/thehoundofthebaskervilles.webp",
    Price: "566",
    Title: "The Hound of the Baskervilles",
  },
  {
    Author: "Agatha Christie",
    Category: "Thriller",
    Image: "./images/theMurderofrogerackroyd.webp",
    Price: "999",
    Title: "The Murder of Roger Ackroyd",
  },
  {
    Author: "Margery Allingham",
    Category: "Thriller",
    Image: "./images/thecrimeatblackdudley.webp",
    Price: "429",
    Title: "The Crime at Black Dudley",
  },
  {
    Author: "Mignon G. Eberhart",
    Category: "Thriller",
    Image: "./images/thepatientinroom18.webp",
    Price: "456",
    Title: "The Patient in Room 18",
  },
  {
    Author: "James Clear",
    Category: "Self-help",
    Image: "./images/atomic habit.jpg",
    Price: "579",
    Title: "Atomic Habits",
  },
  {
    Author: "Brianna Wiest",
    Category: "Self-help",
    Image: "./images/The Mountain Is You.jpg",
    Price: "260",
    Title: "The Mountain Is You",
  },
  {
    Author: "Catherine Gildiner",
    Category: "Self-help",
    Image: "./images/Good Morning Monster.jpg",
    Price: "2000",
    Title: "Good Morning Monster",
  },
  {
    Author: "Napoleon Hill",
    Category: "Self-help",
    Image: "./images/think and grow rich.jpg",
    Price: "408",
    Title: "Think and Grow Rich",
  },
  {
    Author: "Morgan Housel",
    Category: "Self-help",
    Image: "./images/The Psychology of Money.jpg",
    Price: "410",
    Title: "The Psychology of Money",
  },
  {
    Author: "Gillian Flynn",
    Category: "Thriller",
    Image: "./images/Gone Girl.jpg",
    Price: "1179",
    Title: "Gone Girl",
  },
  {
    Author: "Jennie Allen",
    Category: "Self-help",
    Image: "./images/get out of your head.jpg",
    Price: "950",
    Title: "Get Out of Your Head",
  },
  {
      Author :"Raven Kennedy",
      Category :"Romantic",
      Image :"./images/glow.webp",
      Price :"855",
      Title : "Glow",
  },
  {
      Author :" Jaqueline Snowe",
      Category :"Romantic",
      Image :"./images/from the top.webp",
      Price :"1000",
      Title :" From the Top",
  },
  {
      Author :"Ali Hazelwood",
      Category : "Romantic",
      Image : "./images/loveonthebrain.webp",
      Price :"399",
      Title :" Love on the Brain",
  },
  {
      Author :" Lucy Score",
      Category :"Romantic",
      Image :"./images/thingswe.webp",
      Price : "799",
      Title : " Things We Never Got Over",
  },
  {
      Author :"Silvia Moreno-Garcia",
      Category :"Horror",
      Image : "./images/mexican.jpg",
      Price :"988",
      Title :"Mexican Gothic",
  },
  {
      Author :" Mona Awad",
      Category : "Horror",
      Image :"./images/bunny.jpg",
      Price :"750",
      Title :"Bunny",
  },
  {
      Author : "Stephen King",
      Category :"Horror",
      Image : "./images/stephen2.jpg",
      Price :"899",
      Title : "If It Bleeds",
  },
  {
    Author :" Stephen King",
    Category :"Horror",
    Image :"./images/stephen king.jpg",
     Price :"1189",
     Title :"The Outsider",

  },
  {
    Author :" Stephen Chbosky",
    Category :"Horror",
    Image :"./images/imaginary friend.jpg",
     Price : "555",
    Title :"Imaginary Friend",
  },
  {
    Author :"James Patterson",
    Category :"Mystery",
    Image :"./images/Deadly Cross.webp",
     Price :"559",
    Title : "Deadly Cross",
  },
  {
    Author :" David Baldacci",
    Category :"Mystery",
    Image : "./images/Daylight.webp",
     Price :"956",
    Title : "Daylight",
  },
  {
    Author : " Michael Connelly",
    Category :"Mystery",
    Image :"./images/The Law of Innocence.webp",
     Price :"699",
    Title : "The Law of Innocence",
  },
  {
    Author :"John Grisham",
    Category :"Mystery",
    Image :"./images/A Time for Mercy.jpeg",
     Price :"1299",
    Title :"A Time for Mercy",
  },
  {
    Author :"Anthony Horowitz",
    Category :"Mystery",
    Image :"./images/Moonflower Murders.jpeg",
     Price :"899",
    Title : "Moonflower Murders",
  },
  {
    Author :" Sylvia Nasar",
    Category :"Biography",
    Image : "./images/A Beautiful Mind.jpg",
    Price :"555",
    Title : "A Beautiful Mind",
   },
   {
    Author :"Ron Chernow",
    Category :"Biography",
    Image :"./images/Alexander Hamilton.jpg",
    Price : "899",
    Title :" Alexander Hamilton",
   },
   {
    Author :"Sonia Nazario",
    Category :"Biography",
    Image :"./images/Enrique's Journey.jpg",
    Price :"799",
    Title :"Enrique's Journey",
   },
   {
    Author : "Hayden Herrera",
    Category : "Biography",
    Image :"./images/Frida.jpg",
    Price : "699",
    Title :"Frida: A Biography of Frida Kahlo",
   },
   {
    Author :" Jon Krakauer",
    Category :"Biography",
    Image : "./images/Into the Wild.jpg",
    Price :"1599",
    Title :" Into the Wild ",
   },
];
// Store the array of objects in localStorage
localStorage.setItem("arr", JSON.stringify(arr));

// Retrieve the array of objects from localStorage
// const storedArray = JSON.parse(localStorage.getItem("arr"));

// Accessing objects from the retrieved array
// console.log(storedArray);

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
    books.forEach((book, index) => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("book-list-item");
      bookItem.innerHTML = `
                <img src="${book.Image}" alt="${book.Title} cover">
                <h3 class="book-title">${book.Title}</h3>
                <h2 class="book-author">> ${book.Author}</h2>
                <h3 class="book-price"> ₹ ${book.Price}</h3>
                <button class="borrow" onclick="borrow(${index})">Borrow</button>
                 
            `;
      fragment.appendChild(bookItem);
    });
    bookList.appendChild(fragment); // Append all items at once
  }
}


function getBooks() {
  const books = localStorage.getItem("arr");
  try {
    return books ? JSON.parse(books) : [];
  } catch (e) {
    console.error("Error parsing books from localStorage", e);
    return [];
  }
} 

 let loginForm = document.getElementById("container2");
// let count=0;
function popup() {
  console.log("press");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "flex"; // Show the form
    // count++;
  }
   
}
// loginForm.addEventListener('click',()=>{
//   if (count%2 === 0) {
//       popup.style.display = "none";
//   }
// });



let username = document.getElementById("username");
let password = document.getElementById("password");

let validUsername = "admin";
let validPassword = "admin@12345";

function validatation() {
  
  if (username.value === "") {
    alert("username cannot be empty");
    return false;
  }
  if (password.value === "") {
    alert("password cannot be empty");
    return false;
  }

  if (username.value === validUsername && password.value === validPassword) {
    // const loginDiv=document.getElementById("container2");
    // loginDiv.style.display = "none";
    // window.open("../addBook.html");
    return true;
  } else {
    alert("login failed");
    username.value="";
    password.value="";
    return false;
  }
}
function borrow(index) {
  const books = getBooks();
  const borrowedBooks = getBorrowed();

  // Add the selected book to the borrowed list
  borrowedBooks.push(books[index]);
  saveBorrowed(borrowedBooks);
  alert("Added to cart");

  // Navigate to the next page to show borrowed books
  // window.location.href = "./borrow.html"; // Replace with the actual URL
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



// Call functions
displayBooks();


const loginButton = document.getElementById('button');
const manageOption = document.getElementById('manage');
 
// Simulated login state
let isAdmin = false;

loginButton.addEventListener('click' , function(event) {
  event.preventDefault();
  if(isAdmin=validatation()){
    alert("login successful");
    // Simulate admin login
    isAdmin = true;
   // loginButton.textContent = 'Logout';
    manageOption.classList.remove('hidden');
    const loginDiv=document.getElementById("container2");
    loginDiv.style.display = "none";

  }
  else{
    // Simulate logout
    isAdmin = false;
   // loginButton.textContent = 'Login';
    manageOption.classList.add('hidden');

  }
});

const openBook=document.getElementById('manage');
openBook.addEventListener('click', () =>{
  window.location.href= "./addBook.html"

});


// Select all li elements
const catItem = document.querySelectorAll('.catItem li');
const bookCat=document.querySelector('.bookCat');
// Function to handle the click event
function handleClick(event) {
  const value = event.target.innerHTML; // Get the inner HTML content
   bookCat.innerHTML=value;
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
    books.forEach((book, index) => {
      if(book.Category===value){
      const bookItem = document.createElement("div");
      bookItem.classList.add("book-list-item");
      bookItem.innerHTML = `
                <img src="${book.Image}" alt="${book.Title} cover">
                <h3 class="book-title">${book.Title}</h3>
                <h2 class="book-author">> ${book.Author}</h2>
                <h3 class="book-price"> ₹ ${book.Price}</h3>
                <button class="borrow" onclick="borrow(${index})">Borrow</button>
                 
            `;
      fragment.appendChild(bookItem);
      }
    });
    bookList.appendChild(fragment); // Append all items at once
  }

}

//Add event listener to each li element
catItem.forEach(item => {
  item.addEventListener('click', handleClick);
});
// // back to top---------------------------------
// document.addEventListener('DOMContentLoaded', () => {
//   const backToTop = document.getElementById('backToTop');
//   backToTop.innerHTML="&#8593";

//   // Show the button when scrolling down
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 250) { 
//       backToTop.style.display = 'block';
//     } else {
//       backToTop.style.display = 'none';
//     }
//   });

//   // Scroll to the top when the button is clicked
//   backToTop.addEventListener('click', () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });
// });



