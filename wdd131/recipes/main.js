import recipes from './recipes.mjs';

const recipeGallery = document.getElementById('recipe-gallery');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const currentYearSpan = document.getElementById('currentYear');

function renderRecipes(recipeList) {
    recipeGallery.innerHTML = ''; 

    if (recipeList.length === 0) {
        recipeGallery.innerHTML = '<p class="placeholder-text">No recipes found matching your search.</p>';
        return;
    }

    recipeList.forEach(recipe => {
        const card = document.createElement('article');
        card.classList.add('recipe-card');

        let ratingStars = '';
        const fullStars = Math.floor(recipe.rating);
        const halfStar = recipe.rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) {
            ratingStars += '<span aria-hidden="true" class="icon-star">⭐</span>';
        }
        if (halfStar) {
        }
        for (let i = 0; i < 5 - fullStars; i++) { 
            ratingStars += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
        
        const tagsHtml = recipe.tags.map(tag => `<span>${tag}</span>`).join(' ');

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-card-content">
                <h2>${recipe.name}</h2>
                <div class="tags">${tagsHtml}</div>
                <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${ratingStars} (${recipe.rating}/5)
                </div>
                <p class="description">${recipe.description}</p>
                <div class="details">
                    <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
                    <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
                    <p><strong>Yield:</strong> ${recipe.recipeYield}</p>
                </div>
                <h3>Ingredients</h3>
                <ul>
                    ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Instructions</h3>
                <ol>
                    ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
        `;
        recipeGallery.appendChild(card);
    });
}

function filterRecipes(query) {
    const lowerCaseQuery = query.toLowerCase();
    return recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(lowerCaseQuery) ||
            recipe.description.toLowerCase().includes(lowerCaseQuery) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery))
        );
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    const filteredRecipes = filterRecipes(searchTerm);
    renderRecipes(filteredRecipes);
});


function getRandomRecipe(recipeArray) {
    if (!recipeArray || recipeArray.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * recipeArray.length);
    return recipeArray[randomIndex];
}


if (recipes && recipes.length > 0) {
    renderRecipes(recipes); 
} else {
    recipeGallery.innerHTML = '<p class="placeholder-text">No recipes available at the moment.</p>';
}

if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}