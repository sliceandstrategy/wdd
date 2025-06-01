// Step 3.2: articles array with the new book added
const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    // New book added as per Step 3.2
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description: "A fierce dispute among the Gods and the theft of a powerful Orb.", // Description from PDF
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL._SX329_BO1,204,203,200_.jpg", // imgSrc from PDF
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐",
  },
]

// Step 2 (overall): Create functions to build and output HTML
function createArticleHTML(articleData) {
  // Renamed item to articleData for clarity
  // Convert plain text stars to star symbols if needed (as in previous version)
  let displayStars = articleData.stars
  if (articleData.stars.includes("*") && !articleData.stars.includes("⭐")) {
    const starCount = articleData.stars.length
    displayStars = "⭐".repeat(starCount)
  }

  // Format date for the datetime attribute
  const dateObj = new Date(articleData.date)
  const isoDate = dateObj.toISOString().split("T")[0]

  // Step 2.2.2: Create a template literal string (copy/paste from HTML)
  // Step 2.2.3: Replace with data from current article (e.g., ${articleData.date})
  return `
    <div class="book-details">
        <time datetime="${isoDate}">${articleData.date}</time>
        <p class="rating">${displayStars}</p>
        <p class="genre">${articleData.genre}</p>
        <p class="ages">Ages: ${articleData.ages}</p>
    </div>
    <div class="book-content">
        <h2>${articleData.title}</h2>
        <img src="${articleData.imgSrc}" alt="${articleData.imgAlt}">
        <p>${articleData.description}</p>
        <a href="#" class="read-more">Read More</a>
    </div>
  `
}

function displayArticles(articleList) {
  // Step 2.1: Get a reference to the element
  const articlesContainer = document.querySelector("#articles-container")
  if (!articlesContainer) {
    console.error("Articles container (#articles-container) not found!")
    return
  }

  // Step 2.2: For each article in our list
  articleList.forEach((currentArticle) => {
    // Step 2.2.1: Create a new article element and add classes
    const articleElement = document.createElement("article")
    articleElement.classList.add("book-review")

    // Step 2.2.4: Set the innerHTML of the new article
    articleElement.innerHTML = createArticleHTML(currentArticle)

    // Step 2.2.5: Append the new article to the output element
    articlesContainer.appendChild(articleElement)
  })
}

// Ensure script runs after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayArticles(articles)
  console.log("Blog.js loaded and articles displayed dynamically!")
})
