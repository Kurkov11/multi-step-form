const summaryBorder = document.querySelector(".summary-border");

const nameIn = document.querySelector("#name");
const emailIn = document.querySelector("#email");
const phoneIn = document.querySelector("#phone");

const nameEmpty = document.querySelector("#name__empty");
const emailEmpty = document.querySelector("#email__empty");
const phoneEmpty = document.querySelector("#phone__empty");
const emailWrong = document.querySelector("#email__wrong");

const submitButton = document.querySelector("#submit-button");
const backButton = document.querySelector(".back-btn");
const buttonsParent = document.querySelector(".buttons-parent");
const confirmButton = document.querySelector("#confirm-button");

const personalForm = document.querySelector("#personal-info");

const step2toggle = document.querySelector("#step2-toggle");
const step2toggleDot = document.querySelector("#step2-toggle-dot");

const cards = Array.from(document.getElementsByClassName("card"));
let currentCardIndex = 0;

let selectedPlanIndex = 0; //initially selected
const planParenthesisSummary = document.querySelector("#plan-parenthesis");
const totalParenthesisSummary = document.querySelector("#plan-per-parenthesis");

const sidebarCircles = Array.from(
  document.getElementsByClassName("sidebar__circle")
);
const sidebarCirclesNumbers = Array.from(
  document.getElementsByClassName("sidebar__circle__number")
);

const freeMonths = document.querySelectorAll(".free-month");

const bgDiv = document.querySelector(".bg-div");

//plan costs
const arcadeCost = 9;
const advancedCost = 12;
const proCost = 15;
const planCostEl = document.querySelector("#plan-cost");
const planBillingEl = document.querySelector(".plan-billing");
let summarisedPlanCost = arcadeCost; //arcadeCost is selected by default

//add on costs
const onlineServiceCostEl = document.querySelector("#online-service-cost");
const storageCostEl = document.querySelector("#storage-cost");
const profileCostEl = document.querySelector("#profile-cost");
const onlineServiceCost = 1;
const storageCost = 2;
const profileCost = 2;
const yearlyMultiplier = 10;

//initial total costs
let totalMultiplier = 1;
let totalCost;
const totalCostEl = document.getElementById("total-cost");
let basePlanCost = arcadeCost;
let baseCost = 0;
function calculateTotal() {
  totalCost = totalMultiplier * (baseCost + basePlanCost);
  totalCostEl.textContent = `+$${totalCost}/${
    totalMultiplier === 1 ? "mo" : "yr"
  }`;
}

onlineServiceCostEl.textContent = `+$${onlineServiceCost}/mo`;
storageCostEl.textContent = `+$${storageCost}/mo`;
profileCostEl.textContent = `+$${profileCost}/mo`;

onlineServiceSummaryEl = document.querySelector("#online-service-summary");
storageSummaryEl = document.querySelector("#storage-summary");
profileSummaryEl = document.querySelector("#profile-summary");
//buttons - start
submitButton.addEventListener("click", function (e) {
  let errorOcurred = false;

  // CARD 1 ---- START
  const nameValue = nameIn.value;
  const emailValue = emailIn.value;
  const phoneValue = phoneIn.value;

  if (nameValue === "") {
    e.preventDefault();
    nameEmpty.style.display = "inline"; //default
    nameIn.style.borderColor = "red";
    nameIn.style.outlineWidth = "0";
    errorOcurred = true;
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
    errorOcurred = true;
  } else if (!emailValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    e.preventDefault();
    emailEmpty.style.display = "none";
    emailIn.style.borderColor = "red";
    emailIn.style.outlineWidth = "0";
    emailWrong.style.display = "inline";
    errorOcurred = true;
  } else {
    emailEmpty.style.display = "none";
    emailWrong.style.display = "none";
    emailIn.style.borderColor = "hsl(229 24% 87% / var(--tw-border-opacity))";
    emailIn.style.outlineWidth = "1px";
  }
  if (phoneValue === "") {
    e.preventDefault();
    phoneEmpty.style.display = "inline"; //default
    phoneIn.style.borderColor = "red";
    phoneIn.style.outlineWidth = "0";
    errorOcurred = true;
  } else {
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

  if (currentCardIndex === 3) {
    //Change next step to confirm
    submitButton.classList.add("hidden");
    confirmButton.classList.remove("hidden");
    calculateTotal();
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
  //If this is the first card, hide the back button
  if (currentCardIndex === 0) {
    backButton.classList.add("hidden");
    buttonsParent.classList.add("justify-end");
    buttonsParent.classList.remove("justify-between");
  }

  //If we just returned from the last card, change confirm button to next step button
  if (currentCardIndex === cards.length - 3) {
    submitButton.classList.remove("hidden");
    confirmButton.classList.add("hidden");
  }
});
const changeButton = document.querySelector(".change-btn");
changeButton.addEventListener("click", function () {
  submitButton.classList.remove("hidden");
  confirmButton.classList.add("hidden");
  cards[1].classList.remove("hidden");
  cards[currentCardIndex].classList.add("hidden");

  sidebarCircles[currentCardIndex].style.backgroundColor = "transparent";
  sidebarCircles[currentCardIndex].style.borderColor = "white";
  sidebarCirclesNumbers[currentCardIndex].style.color = "white";

  sidebarCircles[1].style.backgroundColor = "hsl(206 94% 87%)";
  sidebarCircles[1].style.borderColor = "hsl(206 94% 87%)";
  sidebarCirclesNumbers[1].style.color = "hsl(213, 96%, 18%)";

  currentCardIndex = 1;
});
confirmButton.addEventListener("click", function () {
  bgDiv.classList.add("h-screen");
  bgDiv.classList.remove("pb-6");
  document.querySelector(".thank-you").classList.remove("hidden");
  cards[currentCardIndex].classList.add("hidden");
  buttonsParent.classList.add("hidden");
  currentCardIndex = 4;
});
//buttons - end

//select your plan - start
let billingPeriodMonthly = true;

const recurringCosts = document.querySelectorAll(".recurring-cost");

step2toggle.addEventListener("change", function () {
  billingPeriodMonthly
    ? (billingPeriodMonthly = false)
    : (billingPeriodMonthly = true); //toggle
  console.log(billingPeriodMonthly);
  //Change text content of step 3, 4, 5 START
  if (billingPeriodMonthly) {
    onlineServiceCostEl.textContent = `+$${onlineServiceCost}/mo`;
    storageCostEl.textContent = `+$${storageCost}/mo`;
    profileCostEl.textContent = `+$${profileCost}/mo`;

    onlineServiceSummaryEl.textContent = `+$${onlineServiceCost}/mo`;
    storageSummaryEl.textContent = `+$${storageCost}/mo`;
    profileSummaryEl.textContent = `+$${profileCost}/mo`;

    planParenthesisSummary.textContent = "(Monthly)";
    totalParenthesisSummary.textContent = "(per month)";

    totalMultiplier = 1;
  } else {
    onlineServiceCostEl.textContent = `+$${
      onlineServiceCost * yearlyMultiplier
    }/yr`;
    storageCostEl.textContent = `+$${storageCost * yearlyMultiplier}/yr`;
    profileCostEl.textContent = `+$${profileCost * yearlyMultiplier}/yr`;
    onlineServiceSummaryEl.textContent = `+$${
      onlineServiceCost * yearlyMultiplier
    }/yr`;
    storageSummaryEl.textContent = `+$${storageCost * yearlyMultiplier}/yr`;
    profileSummaryEl.textContent = `+$${profileCost * yearlyMultiplier}/yr`;

    planParenthesisSummary.textContent = "(Yearly)";
    totalParenthesisSummary.textContent = "(per year)";

    totalMultiplier = yearlyMultiplier;
  }

  //Change text content of step 3 and 4 END

  const toggleMonthlyYearly = function () {
    document.getElementById("monthly").classList.toggle("text-dark-blue");
    document.getElementById("yearly").classList.toggle("text-dark-blue");
    //toggle free month visiblity
    for (let j = 0; j < freeMonths.length; j++) {
      freeMonths[j].classList.toggle("hidden");
    }
  };

  if (this.checked) {
    console.log("checked!");
    step2toggleDot.style.left = "23px"; //equivalent of 1.25 in tailwind variables
    toggleMonthlyYearly();
    recurringCosts[0].textContent = `$${arcadeCost * yearlyMultiplier}/yr`;
    recurringCosts[1].textContent = `$${advancedCost * yearlyMultiplier}/yr`;
    recurringCosts[2].textContent = `$${proCost * yearlyMultiplier}/yr`;
  } else {
    console.log("not checked...");
    step2toggleDot.style.left = "5px"; //equivalent of 1.25 in tailwind variables
    toggleMonthlyYearly();
    recurringCosts[0].textContent = `$${arcadeCost}/mo`;
    recurringCosts[1].textContent = `$${advancedCost}/mo`;
    recurringCosts[2].textContent = `$${proCost}/mo`;
  }
  planCostEl.textContent = recurringCosts[selectedPlanIndex].textContent;
});

const planTypes = Array.from(document.querySelectorAll(".plan-type"));
const planSummary = document.querySelector("#plan-summary");
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
    //summary page
    selectedPlanIndex = planTypes.indexOf(planType);
    console.log(billingPeriodMonthly);
    switch (selectedPlanIndex) {
      //Arcade
      case 0:
        console.log(recurringCosts[0].textContent);

        planSummary.textContent = "Arcade";
        planCostEl.textContent = recurringCosts[0].textContent;
        basePlanCost = arcadeCost;
        break;
      //Advanced
      case 1:
        console.log(recurringCosts[1].textContent);

        planSummary.textContent = "Advanced";
        planCostEl.textContent = recurringCosts[1].textContent;
        basePlanCost = advancedCost;
        break;
      //Pro
      case 2:
        console.log(recurringCosts[2].textContent);
        planSummary.textContent = "Pro";
        planCostEl.textContent = recurringCosts[2].textContent;
        basePlanCost = proCost;
        break;
    }
    calculateTotal(); //for step 4
  };
});

const checkBoxes = document.querySelectorAll(".checkbox");
const addOns = document.querySelectorAll(".add-on");
const addOnSummaries = document.querySelectorAll(".add-on-summary");
console.log(addOnSummaries);

for (let i = 0; i < addOns.length; i++) {
  addOns[i].addEventListener("click", function () {
    addOns[i].classList.toggle("add-on-checked");
    addOnSummaries[i].classList.toggle("hidden");

    const checkboxToCheck = addOns[i].querySelector(".checkbox");
    checkboxToCheck.classList.toggle("checkbox-checked");

    if (addOns[i].classList.contains("add-on-checked")) {
      if (i === 0) {
        baseCost += 1;
      } else if (i === 1) {
        baseCost += 2;
      } else {
        baseCost += 2;
      }
    } else {
      if (i === 0) {
        baseCost -= 1;
      } else if (i === 1) {
        baseCost -= 2;
      } else {
        baseCost -= 2;
      }
    }
    calculateTotal();
    console.log("base:" + baseCost);
    console.log("real:" + baseCost * yearlyMultiplier);

    //Remove the gray separator/border when there are no addons selected
    let anyAddOnChecked = false;
    for (let i = 0; i < addOns.length; i++) {
      if (addOns[i].classList.contains("add-on-checked")) {
        anyAddOnChecked = true;
      }
      if (!anyAddOnChecked) {
        summaryBorder.classList.remove("gray-border-bottom");
        summaryBorder.classList.remove("pb-3");
        summaryBorder.classList.remove("mb-3");
      } else {
        summaryBorder.classList.add("gray-border-bottom");
        summaryBorder.classList.add("pb-3");
        summaryBorder.classList.add("mb-3");
      }
    }
  });
}

//select your plan - end
