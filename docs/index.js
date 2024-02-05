const nameIn = document.querySelector("#name");
const emailIn = document.querySelector("#email");
const phoneIn = document.querySelector("#phone");

const nameEmpty = document.querySelector("#name__empty");
const emailEmpty = document.querySelector("#email__empty");
const phoneEmpty = document.querySelector("#phone__empty");

const submitButton = document.querySelector("#submit-button");
const backButton = document.querySelector(".back-btn");
const buttonsParent = document.querySelector(".buttons-parent");

const personalForm = document.querySelector("#personal-info");

const step2toggle = document.querySelector("#step2-toggle");
const step2toggleDot = document.querySelector("#step2-toggle-dot");

const cards = Array.from(document.getElementsByClassName("card"));
let currentCardIndex = 0;

const sidebarCircles = Array.from(
  document.getElementsByClassName("sidebar__circle")
);
const sidebarCirclesNumbers = Array.from(
  document.getElementsByClassName("sidebar__circle__number")
);

const freeMonths = document.querySelectorAll(".free-month");

//add on costs
const onlineServiceCostEl = document.querySelector("#online-service-cost");
const storageCostEl = document.querySelector("#storage-cost");
const profileCostEl = document.querySelector("#profile-cost");
const onlineServiceCost = 1;
const storageCost = 2;
const profileCost = 2;
const yearlyMultiplier = 10;

onlineServiceCostEl.textContent = `+$${onlineServiceCost}/mo`;
storageCostEl.textContent = `+$${storageCost}/mo`;
profileCostEl.textContent = `+$${profileCost}/mo`;

//buttons - start

submitButton.addEventListener("click", function (e) {
  let errorOcurred = true; //Assume there was an error

  // CARD 1 ---- START
  const nameValue = nameIn.value;
  const emailValue = emailIn.value;
  const phoneValue = phoneIn.value;

  if (nameValue === "") {
    e.preventDefault();
    nameEmpty.style.display = "inline"; //default
    nameIn.style.borderColor = "red";
    nameIn.style.outlineWidth = "0";
  } else {
    nameEmpty.style.display = "none";
    nameIn.style.borderColor = "hsl(229 24% 87% / var(--tw-border-opacity))";
    nameIn.style.outlineWidth = "1px";
  }
  if (emailValue === "") {
    e.preventDefault();
    emailEmpty.style.display = "inline"; //default
    emailIn.style.borderColor = "red";
    emailIn.style.outlineWidth = "0";
  } else {
    emailEmpty.style.display = "none";
    emailIn.style.borderColor = "hsl(229 24% 87% / var(--tw-border-opacity))";
    emailIn.style.outlineWidth = "1px";
  }
  if (phoneValue === "") {
    e.preventDefault();
    phoneEmpty.style.display = "inline"; //default
    phoneIn.style.borderColor = "red";
    phoneIn.style.outlineWidth = "0";
  } else {
    //If entered data is correct
    errorOcurred = false;
    e.preventDefault();
    phoneEmpty.style.display = "none";
    phoneIn.style.borderColor = "hsl(229 24% 87% / var(--tw-border-opacity))";
    phoneIn.style.outlineWidth = "1px";
    // CARD 1 ---- END
  }

  if (!errorOcurred && currentCardIndex + 1 < cards.length) {
    cards[currentCardIndex].classList.add("hidden");
    cards[currentCardIndex + 1].classList.remove("hidden");
    backButton.classList.remove("hidden");
    buttonsParent.classList.remove("justify-end");
    buttonsParent.classList.add("justify-between");

    sidebarCircles[currentCardIndex].style.backgroundColor = "transparent";
    sidebarCircles[currentCardIndex].style.borderColor = "white";
    sidebarCirclesNumbers[currentCardIndex].style.color = "white";

    sidebarCircles[currentCardIndex + 1].style.backgroundColor =
      "hsl(206 94% 87%)";
    sidebarCircles[currentCardIndex + 1].style.borderColor = "hsl(206 94% 87%)";
    sidebarCirclesNumbers[currentCardIndex + 1].style.color =
      "hsl(213, 96%, 18%)";
    currentCardIndex++;
  }
});
backButton.addEventListener("click", function () {
  cards[currentCardIndex - 1].classList.remove("hidden");
  cards[currentCardIndex].classList.add("hidden");

  sidebarCircles[currentCardIndex].style.backgroundColor = "transparent";
  sidebarCircles[currentCardIndex].style.borderColor = "white";
  sidebarCirclesNumbers[currentCardIndex].style.color = "white";

  sidebarCircles[currentCardIndex - 1].style.backgroundColor =
    "hsl(206 94% 87%)";
  sidebarCircles[currentCardIndex - 1].style.borderColor = "hsl(206 94% 87%)";
  sidebarCirclesNumbers[currentCardIndex - 1].style.color =
    "hsl(213, 96%, 18%)";

  currentCardIndex--;
  if (currentCardIndex === 0) {
    backButton.classList.add("hidden");
    buttonsParent.classList.add("justify-end");
    buttonsParent.classList.remove("justify-between");
  }
});

//buttons - end

//select your plan - start
let billingPeriodMonthly = true;

step2toggle.addEventListener("change", function () {
  billingPeriodMonthly
    ? (billingPeriodMonthly = false)
    : (billingPeriodMonthly = true); //toggle

  //Change text content of step 3 START
  if (billingPeriodMonthly) {
    onlineServiceCostEl.textContent = `+$${onlineServiceCost}/mo`;
    storageCostEl.textContent = `+$${storageCost}/mo`;
    profileCostEl.textContent = `+$${profileCost}/mo`;
  } else {
    onlineServiceCostEl.textContent = `+$${
      onlineServiceCost * yearlyMultiplier
    }/yr`;
    storageCostEl.textContent = `+$${storageCost * yearlyMultiplier}/yr`;
    profileCostEl.textContent = `+$${profileCost * yearlyMultiplier}/yr`;
  }

  //Change text content of step 3 END

  const toggleMonthlyYearly = function () {
    document.getElementById("monthly").classList.toggle("text-dark-blue");
    document.getElementById("yearly").classList.toggle("text-dark-blue");
    //toggle free month visiblity
    for (let j = 0; j < freeMonths.length; j++) {
      freeMonths[j].classList.toggle("hidden");
    }
  };
  const recurringCosts = document.querySelectorAll(".recurring-cost");
  if (this.checked) {
    console.log("checked!");
    step2toggleDot.style.left = "23px"; //equivalent of 1.25 in tailwind variables
    toggleMonthlyYearly();
    recurringCosts[0].textContent = "$90/yr";
    recurringCosts[1].textContent = "$120/yr";
    recurringCosts[2].textContent = "$150/yr";
  } else {
    console.log("not checked...");
    step2toggleDot.style.left = "5px"; //equivalent of 1.25 in tailwind variables
    toggleMonthlyYearly();
    recurringCosts[0].textContent = "$9/mo";
    recurringCosts[1].textContent = "$12/mo";
    recurringCosts[2].textContent = "$15/mo";
  }
});

const planTypes = Array.from(document.querySelectorAll(".plan-type"));
console.log(planTypes);
planTypes.forEach((planType) => {
  planType.onclick = function () {
    planType.style.borderColor = "hsl(243, 100%, 62%)"; //hard coded purple blue from taiwlind config. Should be dry code...
    planType.style.backgroundColor = "hsla(217, 100%, 97%, 0.4)"; //hard coded neutral-300 with some opacity
    for (let i = 0; i < planTypes.length; i++) {
      if (planType !== planTypes[i]) {
        planTypes[i].style.borderColor = "hsl(229, 24%, 87%)"; //hard coded neutral-400 from taiwlind config. Should be dry code...
        planTypes[i].style.backgroundColor = "white";
      }
    }
    console.log(planType);
  };
});

const checkBoxes = document.querySelectorAll(".checkbox");
const addOns = document.querySelectorAll(".add-on");
for (let i = 0; i < addOns.length; i++) {
  addOns[i].addEventListener("click", function () {
    addOns[i].classList.toggle("add-on-checked");

    const checkboxToCheck = addOns[i].querySelector(".checkbox");
    checkboxToCheck.classList.toggle("checkbox-checked");
  });
}
//select your plan - end
