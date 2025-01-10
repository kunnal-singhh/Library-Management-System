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
    Title: "Framed: Astonishing True Stories of Wrongful Convictions",
  },
  {
    Author: " Mel Robbins",
    Category: "Non-Fiction",
    Image: "./images/The let them theory.jpeg",
    Price: "1129",
    Title:
      "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About",
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
    Title: "The House of My Mother: A Daughter's Quest for Freedom",
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
    Category: "Self-help book",
    Image: "./images/atomic habit.jpg",
    Price: "579",
    Title: "Atomic Habits",
  },
  {
    Author: "Brianna Wiest",
    Category: "Self-help book",
    Image: "./images/The Mountain Is You.jpg",
    Price: "260",
    Title: "The Mountain Is You",
  },
  {
    Author: "Catherine Gildiner",
    Category: "Self-help book",
    Image: "./images/Good Morning Monster.jpg",
    Price: "2000",
    Title: "Good Morning Monster",
  },
  {
    Author: "Napoleon Hill",
    Category: "Self-help book",
    Image: "./images/think and grow rich.jpg",
    Price: "408",
    Title: "Think and Grow Rich",
  },
  {
    Author: "Morgan Housel",
    Category: "Self-help book",
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
    Category: "Self-help book",
    Image: "./images/get out of your head.jpg",
    Price: "950",
    Title: "Get Out of Your Head",
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
];
// Store the array of objects in localStorage
localStorage.setItem("arr", JSON.stringify(arr));

// Retrieve the array of objects from localStorage
const storedArray = JSON.parse(localStorage.getItem("arr"));

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
  const books = localStorage.getItem("books");
  try {
    return books ? JSON.parse(books) : [];
  } catch (e) {
    console.error("Error parsing books from localStorage", e);
    return [];
  }
}
function popup() {
  console.log("press");
  var loginForm = document.getElementById("container2");
  if (loginForm.style.display === "none") {
    loginForm.style.display = "flex"; // Show the form
    // } else {
    //   loginForm.style.display = "none"; // Hide the form
    // }
  }
}

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
    alert("login successful");
    // window.open("../addBook.html");
    return true;
  } else {
    alert("login failed");
    return false;
  }
}
function borrow(index) {
  const books = getBooks();
  const borrowedBooks = getBorrowed();

  // Add the selected book to the borrowed list
  borrowedBooks.push(books[index]);
  saveBorrowed(borrowedBooks);

  // Navigate to the next page to show borrowed books
  window.location.href = "./borrow.html"; // Replace with the actual URL
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
// displayCategory();

const loginButton = document.getElementById('button');
const manageOption = document.getElementById('manage');

// Simulated login state
let isAdmin = false;

loginButton.addEventListener('click' , () => {
  if(!isAdmin){
    // Simulate admin login
    isAdmin = true;
   // loginButton.textContent = 'Logout';
    manageOption.classList.remove('hidden');
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
