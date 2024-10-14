const titleInputEl = document.querySelector("#title");
const titleLabelEl = document.querySelector("#titleLabel");
const descriptionInputEl = document.querySelector("#description");
const descriptionLabelEl = document.querySelector("#descriptionLabel");
const priceInputEl = document.querySelector("#price");
const priceLabelEl = document.querySelector("#priceLabel");
const locationInputEl = document.querySelector("#location");
const locationLabelEl = document.querySelector("#locationLabel");
const countryInputEl = document.querySelector("#country");
const countryLabelEl = document.querySelector("#countryLabel");
const errorsEl = document.querySelectorAll("#error");
const submitButtonEl = document.querySelector("#button");
const formEl = document.querySelector("#form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  checkValidation(formEl);
});

function validateNull(inputElement, labelElement, errorIndex) {
  inputElement.classList.remove("border-gray-200");
  inputElement.classList.add("border-red-600");
  labelElement.classList.remove("text-gray-500");
  labelElement.classList.add("text-red-600");
  errorsEl[errorIndex].classList.remove("hidden");
  inputElement.focus();
}

function validateNotNull(inputElement, labelElement, errorIndex) {
  inputElement.classList.add("border-gray-200");
  inputElement.classList.remove("border-red-600");
  labelElement.classList.add("text-gray-500");
  labelElement.classList.remove("text-red-600");
  errorsEl[errorIndex].classList.add("hidden");
}

function checkValidation(formEl) {
  titleValue = titleInputEl.value;
  descriptionValue = descriptionInputEl.value;
  priceValue = priceInputEl.value;
  locationValue = locationInputEl.value;
  countryValue = countryInputEl.value;

  if (
    titleValue == "" ||
    descriptionValue == "" ||
    priceValue == "" ||
    locationValue == "" ||
    countryValue == ""
  ) {
    if (countryValue == "") {
      validateNull(countryInputEl, countryLabelEl, 4);
    } else {
      validateNotNull(countryInputEl, countryLabelEl, 4);
    }
    if (locationValue == "") {
      validateNull(locationInputEl, locationLabelEl, 3);
    } else {
      validateNotNull(locationInputEl, locationLabelEl, 3);
    }
    if (priceValue == "") {
      validateNull(priceInputEl, priceLabelEl, 2);
    } else {
      validateNotNull(priceInputEl, priceLabelEl, 2);
    }
    if (descriptionValue == "") {
      validateNull(descriptionInputEl, descriptionLabelEl, 1);
    } else {
      validateNotNull(descriptionInputEl, descriptionLabelEl, 1);
    }
    if (titleValue == "") {
      validateNull(titleInputEl, titleLabelEl, 0);
    } else {
      validateNotNull(titleInputEl, titleLabelEl, 0);
    }
  } else {
    formEl.submit();
  }
}
