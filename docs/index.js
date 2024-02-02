const nameIn = document.querySelector("#name");
const emailIn = document.querySelector("#email");
const phoneIn = document.querySelector("#phone");

const nameEmpty = document.querySelector("#name__empty");
const emailEmpty = document.querySelector("#email__empty");
const phoneEmpty = document.querySelector("#phone__empty");

const personalSubmit = document.querySelector("#personal-submit");

const personalForm = document.querySelector("#personal-info");

const step2toggle = document.querySelector("#step2-toggle");

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

step2toggle.addEventListener("change", function () {
  if (this.checked) {
    console.log("checked!");
  } else {
    console.log("not checked...");
  }
});
