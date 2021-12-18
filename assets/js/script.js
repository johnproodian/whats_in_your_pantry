

var apiKey = "0195b7fd3cb14afbaa629e0c06b3d5b8";
var getRecipeBtn = document.querySelector("#search-btn");
var addItemsBtn = document.querySelector("#add-btn");
var recipeSummaries = ["chicken parmesan", "pancakes", "chicken strips", "mac 'n cheese"];

var recipeResultsContainer = document.querySelector("#recipe-results");

var ingredientInputs = ["apple", "flour", "egg"];
ingredientInputs.toString();
console.log("stringified: " + ingredientInputs)

// changed name from 'displayIngredients' to 'ingredientInputHandler'
var ingredientInputHandler = function(ingredientInputEl) {

    // get ingredients to the array to be used
    // 
    var ingredientInputEl = document.getElementById("ingredient-input").value
    
    ingredientInputs.push(ingredientInputEl);
    console.log(ingredientInputs);

    // var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0195b7fd3cb14afbaa629e0c06b3d5b8&ingredients=" + ingredientInputs;

    // fetch(apiUrl)
    //     .then(function(response) {
    //         if (response.ok) {
    //             response.json()
    //                 // call the displayRecipeSummaries w/ data array
    //                 .then(function(data) {
    //                     displayRecipeSummaries(data);
    //                 })
                
    //         } else (
    //             alert("Didn't work!")
    //         );
    //     }
    //     )
}

var getRecipes = function() {
    // take ingredient array and convert it to single string
    ingredientInputs.toString();

    // make apiUrl that adds the single string ingredient variable
    var apiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=0195b7fd3cb14afbaa629e0c06b3d5b8&ingredients=" + ingredientInputs;
    
    // fetch api and json the response
    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json()
                    // call the displayRecipeSummaries w/ data array
                    .then(function(data) {
                        displayRecipeSummaries(data);
                    })
                
            } else (
                alert("Didn't work!")
            );
        }
        )    
}





var displayRecipeSummaries = function(recipeSummariesArray) {
    // change recipeSummaries to parameter that be response data object when called
    for (i = 0; i < recipeSummariesArray.length; i++) {
        var cardDivEl = document.createElement("div")
        cardDivEl.className = "card";
        var cardContentDivEl = document.createElement("div")
        cardContentDivEl.className = "card-content";
        var contentDivEl = document.createElement("div")
        contentDivEl.className = "content";

        // create an image tag, set attribute (src), and append it to the content Div
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src", recipeSummariesArray[i].image); 
        // ***Need to size the images...

        contentDivEl.textContent = recipeSummariesArray[i].title;
        contentDivEl.append(imgTag);
        cardContentDivEl.appendChild(contentDivEl);
        cardContentDivEl.appendChild(imgTag);
        cardDivEl.appendChild(cardContentDivEl);
        recipeResultsContainer.appendChild(cardDivEl);
    }
}

getRecipeBtn.addEventListener("click", getRecipes);
addItemsBtn.addEventListener("click", ingredientInputHandler);


