const arrowLeft = document.querySelector(".fa-arrow-left");
const arrowRight = document.querySelector(".fa-arrow-right");

arrowLeft.onclick = function () {
  arrowLeft.classList.remove("non-clicked-arrow");
  arrowLeft.classList.add("clicked-arrow");
  arrowRight.classList.remove("clicked-arrow");
  arrowRight.classList.add("non-clicked-arrow");
};

arrowRight.onclick = function () {
  arrowRight.classList.remove("non-clicked-arrow");
  arrowRight.classList.add("clicked-arrow");
  arrowLeft.classList.remove("clicked-arrow");
  arrowLeft.classList.add("non-clicked-arrow");
};

const favIcon = document.querySelectorAll(".fa-heart");
const popularFastFoodCards = document.querySelectorAll(
  ".popular-fast-food .card"
);
const cardOverlay = document.querySelector(".card-biger .overlay");
const cardInnerOverlay = document.querySelector(".card-biger .overlay .card");
const popularFastFoodCardsImg = document.querySelectorAll(
  ".popular-fast-food .card img"
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

const emailInput = document.querySelector(".emailInput");
const subMass = document.querySelector(".overlay-sub-mass");
const subBtn = document.querySelector(".sub-btn");
const doneBtn = document.querySelector(".done-btn");
const subMassError = document.querySelector(".overlay-sub-mass-error");
const errorDoneBtn = document.querySelector(
  ".overlay-sub-mass-error .done-btn"
);
subBtn.onclick = function () {
  if (emailInput.value === "") {
    subMassError.classList.add("display");
  } else {
    subMass.classList.add("display");
  }
};

doneBtn.onclick = function () {
  subMass.classList.remove("display");
  emailInput.value = "";
};
errorDoneBtn.onclick = function () {
  subMassError.classList.remove("display");
  emailInput.value = "";
};

const MoreAboutUsBtn = document.querySelectorAll(".more-about-us-btn");
const doneBtnAboutUs = document.querySelector(
  ".overlay-sub-mass-about .done-btn"
);
const aboutUsMass = document.querySelector(".overlay-sub-mass-about");

for (let i = 0; i < MoreAboutUsBtn.length; i++) {
  MoreAboutUsBtn[i].onclick = function () {
    aboutUsMass.classList.add("display");
  };
}

doneBtnAboutUs.onclick = function () {
  aboutUsMass.classList.remove("display");
};

const comingSoon = document.querySelectorAll(".coming-soon");
const comingSoonMass = document.querySelector(".overlay-sub-mass-coming-soon");
const doneBtnComingSoon = document.querySelector(
  ".overlay-sub-mass-coming-soon .done-btn"
);
for (let i = 0; i < comingSoon.length; i++) {
  comingSoon[i].addEventListener("click", function () {
    comingSoonMass.classList.add("display");
  });
}

doneBtnComingSoon.onclick = function () {
  comingSoonMass.classList.remove("display");
};

const contactUsCard = document.querySelector(".overlay-contact-us-card");
const contactUsDoneBtn = document.querySelector(".contact-us-card .done-btn");
const contactUsBtn = document.querySelectorAll(".contact-us-btn");
const contactUsbackBtn = document.querySelector(".contact-us-card .back-btn");
const contactUsEmailInputBox = document.querySelector(
  ".contact-us-card .emailInputBox"
);
const contactUsmessageInputBox = document.querySelector(
  ".contact-us-card .messageInputBox"
);
console.log(contactUsEmailInputBox + contactUsmessageInputBox);

for (let i = 0; i < contactUsBtn.length; i++) {
  contactUsBtn[i].addEventListener("click", function () {
    contactUsCard.classList.add("display");
  });
}

contactUsDoneBtn.onclick = function () {
  if (
    contactUsEmailInputBox.value == "" ||
    contactUsmessageInputBox.value == ""
  ) {
    contactUsEmailInputBox.value = "";
    contactUsmessageInputBox.value = "";
    contactUsCard.classList.remove("display");
    subMassError.classList.add("display");
  } else {
    contactUsEmailInputBox.value = "";
    contactUsmessageInputBox.value = "";
    contactUsCard.classList.remove("display");
    subMass.classList.add("display");
  }
};

contactUsbackBtn.onclick = function () {
  contactUsCard.classList.remove("display");
};

const orderNowBtn = document.querySelectorAll(".order-now-btn");
const orderNowCard = document.querySelector(".overlay-order-now-card");
const orderNowBackBtn = document.querySelector(".order-now-card .back-btn");
const orderNowDoneBtn = document.querySelector(".order-now-card .done-btn");
const orderNowEmailBox = document.querySelector(
  ".order-now-card .emailInputBox"
);
const orderNowPhoneNumberBox = document.querySelector(
  ".order-now-card .phoneNumberInputBox"
);

for (let i = 0; i < orderNowBtn.length; i++) {
  orderNowBtn[i].addEventListener("click", function () {
    orderNowCard.classList.add("display");
  });
}

orderNowBackBtn.onclick = function () {
  orderNowCard.classList.remove("display");
};

orderNowDoneBtn.onclick = function () {
  if (orderNowEmailBox.value == "" || orderNowPhoneNumberBox.value == "") {
    orderNowCard.classList.remove("display");
    subMassError.classList.add("display");
    orderNowPhoneNumberBox.value = "";
    orderNowEmailBox.value = "";
  } else {
    orderNowCard.classList.remove("display");
    subMass.classList.add("display");
    orderNowPhoneNumberBox.value = "";
    orderNowEmailBox.value = "";
  }
};

const sideBarBtn = document.querySelector(".side-bar-btn");
const closeButton = document.querySelector(".close-btn");
sideBarBtn.addEventListener("click", function () {
  document.querySelector(".side-bar").classList.toggle("side-bar-out");
  document.querySelector(".side-bar").classList.toggle("side-bar-in");
});

const sideBar = document.querySelectorAll(".side-bar li");

for (let i = 0; i < sideBar.length; i++) {
  sideBar[i].addEventListener("click", function () {
    document.querySelector(".side-bar").classList.toggle("side-bar-out");
    document.querySelector(".side-bar").classList.toggle("side-bar-in");
  });
}

closeButton.addEventListener("click", function () {
  document.querySelector(".side-bar").classList.toggle("side-bar-out");
  document.querySelector(".side-bar").classList.toggle("side-bar-in");
});

const cartBtn = document.querySelector(".cart-btn");

cartBtn.addEventListener("click", function () {
  comingSoonMass.classList.add("display");
});


const popularFoodItemsTitlle = document.querySelectorAll(".popular-food-items .title");
const popularFoodItemsCards = document.querySelectorAll(".popular-food-items .card");


for (let i = 0; i < popularFoodItemsCards.length; i++) {
  popularFoodItemsCards[i].addEventListener("click", function () {

    let title = popularFoodItemsTitlle[i].innerHTML; 
    localStorage.setItem("foodTitle", title); 
    window.location.href = "food.html";
    
  });
}