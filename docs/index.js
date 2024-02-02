const nameIn = document.querySelector("#name");
const emailIn = document.querySelector("#email");
const phoneIn = document.querySelector("#phone");

const nameEmpty = document.querySelector("#name__empty");
const emailEmpty = document.querySelector("#email__empty");
const phoneEmpty = document.querySelector("#phone__empty");

const personalSubmit = document.querySelector("#personal-submit");

const personalForm = document.querySelector("#personal-info");

const step2toggle = document.querySelector("#step2-toggle");
const step2toggleDot = document.querySelector("#step2-toggle-dot");

//personal info - start

personalForm.addEventListener("submit", function (e) {
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
    phoneEmpty.style.display = "none";
    phoneIn.style.borderColor = "hsl(229 24% 87% / var(--tw-border-opacity))";
    phoneIn.style.outlineWidth = "1px";
  }
});

//personal info - end

//select your plan - start

step2toggle.addEventListener("change", function () {
  if (this.checked) {
    console.log("checked!");
    step2toggleDot.style.left = "23px"; //equivalent of 1.25 in tailwind variables
  } else {
    console.log("not checked...");
    step2toggleDot.style.left = "5px"; //equivalent of 1.25 in tailwind variables
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

//select your plan - end
