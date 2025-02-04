const popularFoodItemsSpecific = document.querySelector(
  ".popular-food-items-specific .row"
);

const loader = document.querySelector(".loader");
const headTitle = document.querySelector(".head-of-foods  h2");
let type = localStorage.getItem("foodTitle");
headTitle.textContent = type;

async function getFoodItems() {

  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${type}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.recipes;
  }
  catch(err){

  confirm("error");
  localStorage.removeItem("foodTitle");
  loader.classList.add("display-none");
    window.location.href = "index.html";
    return[];
  }

}

async function displayFoodItems() {
  const foodItems = await getFoodItems();
  console.log(foodItems);

  const res = await foodItems
    .map((foodItem) => {
      return ` <div class="card">
        <div class="img-part">
          <i class="fa-solid fa-heart non-clicked"></i>
          <img src="${foodItem.image_url}" alt="fast-food" />
        </div>
        <div class="text-part">
          <span class="title"> ${foodItem.title} </span>
        </div>
      </div>`;
    })
    .join("");

  popularFoodItemsSpecific.innerHTML = res;
  localStorage.removeItem("foodTitle");
  setAlldisplayFoodItems()
  loader.classList.add("display-none");
}



const backButtonFood = document.querySelector(".back-btn");
backButtonFood.addEventListener("click", function () {
  window.location.href = "index.html";
});


displayFoodItems();













function setAlldisplayFoodItems(){

const favIcon = document.querySelectorAll(".fa-heart");

const popularFastFoodCards = document.querySelectorAll(
  ".popular-food-items-specific .card"
);
const cardOverlay = document.querySelector(".card-biger .overlay");
const cardInnerOverlay = document.querySelector(".card-biger .overlay .card");
const popularFastFoodCardsImg = document.querySelectorAll(
  ".popular-food-items-specific .card img"
);

for (let i = 0; i < favIcon.length; i++) {
  favIcon[i].onclick = function () {
    favIcon[i].classList.toggle("non-clicked");
    favIcon[i].classList.toggle("clicked");
  };
}

for (let i = 0; i < popularFastFoodCardsImg.length; i++) {
  popularFastFoodCardsImg[i].addEventListener("click", function () {
    cardInnerOverlay.innerHTML = popularFastFoodCards[i].innerHTML;
    cardInnerOverlay.innerHTML += `<span class="back-btn">Back</span>`;
    cardOverlay.classList.add("display-flex");

    const favIconInnerOverlay = document.querySelectorAll(
      ".card-biger .overlay .fa-heart"
    );

    for (let c = 0; c < favIconInnerOverlay.length; c++) {
      favIconInnerOverlay[c].onclick = function () {
        favIconInnerOverlay[c].classList.toggle("non-clicked");
        favIconInnerOverlay[c].classList.toggle("clicked");
        favIcon[i].classList.toggle("non-clicked");
        favIcon[i].classList.toggle("clicked");
      };
    }

    const backBtn = document.querySelector(".card-biger .overlay .back-btn");
    backBtn.addEventListener("click", function () {
      cardOverlay.classList.remove("display-flex");
    });
  });
}
}