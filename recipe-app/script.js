const mealsEle = document.getElementById("meals");
const favMealsEle = document.getElementById("fav-meals");
const searchTerm = document.getElementById("search-term");
const searchbtn = document.getElementById("search");
const mealPopUpBtn = document.getElementById("meal-popup");
var closePopupBtn = document.getElementById("close-popupp");
console.log('closePopupBtn', closePopupBtn);

//console.log('mealsEle', mealsEle);

//$('#close-popupp').on('click', closepopup());


function closepopup() {
   mealPopUpBtn.classList.add("hidden");
}
getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const responseData = await res.json();
  const randomMeal = responseData.meals[0];
  // console.log('getRandomMeal -> randomMeal', randomMeal);
  addMeal(randomMeal, true);
  showMealInfo(randomMeal);
}

async function getMealbyId(id) {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const responseData = await res.json();
  const meal = responseData.meals[0];
  // console.log('getMealbyId -> meal', meal);
  return meal;
}

async function getMealByName(name) {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name
  );
  const responseData = await res.json();
  const meals = responseData.meals;
  console.log("getMealByName -> meals", meals);
  return meals;
}

function addMeal(mealItem) {
  const meal = document.createElement("div");
  meal.classList.add("meal");
  meal.innerHTML = `
     <div class="meal-header">
        <div class="random">
            <span> Random Recipe</span>
        </div>
        <img src="${mealItem.strMealThumb}"
            alt="${mealItem.strMeal}">
    </div>
    <div class="meal-body">
        <h4>${mealItem.strMeal}</h4>
        <button class="fav-btn">
            <i class="far fa-heart"></i>
        </button>
    </div>
`;
  const btn = meal.querySelector(".meal-body .fav-btn");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (btn.classList.contains("active")) {
      removeMealsLS(mealItem.idMeal);
      btn.classList.remove("active");
    } else {
      addMealsLS(mealItem.idMeal);
      btn.classList.add("active");
    }
    favMealsEle.innerHTML = "";
    fetchFavMeals();
  });

  meal.addEventListener("click", () => {
    showMealInfo(mealItem);
    mealPopUpBtn.classList.remove("hidden");
  });

  mealsEle.appendChild(meal);
}

function addMealsLS(mealId) {
  const mealIds = getMealsLS();
  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealsLS(mealId) {
  const mealIds = getMealsLS();
  console.log("mealId from remove function", mealId);

  console.log("removeMealsLS -> mealIds", mealIds);
  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id != mealId))
  );
}
function getMealsLS() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));
  return mealIds ? mealIds : [];
}
async function fetchFavMeals() {
  const mealIds = getMealsLS();
  const meals = [];
  for (i = 0; i < mealIds.length; i++) {
    const meal = await getMealbyId(mealIds[i]);
    meals.push(meal);
    addMealstoFav(meal);
  }
  console.log("fetchFavMeals -> meals", meals);
}

function addMealstoFav(meal) {
  const favMeal = document.createElement("li");
  favMeal.innerHTML = `<img src="${meal.strMealThumb}"
    alt="${meal.strMeal}">
<span>${meal.strMeal}</span>
<button class="close-btn"><i class="far fa-times-circle"></i></button> 
`;

  closebtn = favMeal.querySelector(".close-btn");
  closebtn.addEventListener("click", () => {
    removeMealsLS(meal.idMeal);
    favMealsEle.innerHTML = "";
    fetchFavMeals();
  });

  favMealsEle.appendChild(favMeal);
}

// function closeFav(mealId){
//  removeMealsLS(mealId);
//  favMealsEle.innerHTML = '';
//  fetchFavMeals();

// }

searchbtn.addEventListener("click", async () => {
  //Clean the container
  mealsEle.innerHTML = "";
  const searchValue = searchTerm.value;
  const meals = await getMealByName(searchValue);
  console.log("meals", meals);
  meals.forEach((meal) => {
    addMeal(meal);
  });
});

function showMealInfo(mealData) {
  mealPopUpBtn.innerHTML = "";
  console.log("showMealInfo -> mealData", mealData);
  console.log("Inside thr popup function");

  const mealEl = document.createElement("div");
  mealEl.classList.add("meal-info");
  mealEl.innerHTML = `
    <div id="close-popupp" class="close-popup">
                     <i class="fas fa-times"></i>
                </div>
    <h1>${mealData.strMeal}</h1>
                <img src="${mealData.strMealThumb}" alt="Image">
                <p>${mealData.strInstructions}</p>
    `;
  mealPopUpBtn.appendChild(mealEl);
  //const closePopupBtn = document.getElementById("close-popupp");
  console.log('showMealInfo -> closePopupBtn', closePopupBtn);
 
    console.log('showMealInfo -> closePopupBtn after', closePopupBtn);

  
}


closePopupBtn.addEventListener("click", ()=>{
    console.log("popup closed");
    mealPopUpBtn.classList.add("hidden");
});

// function hidePopup(e) {
//   if (e) {
//     console.log("popup closed");
//     mealPopUpBtn.classList.add("hidden");
//   }
// }
