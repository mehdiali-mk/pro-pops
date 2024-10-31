const formReviewEl = document.querySelector("#formReview");

if (formReviewEl) {
  const reviewTitleInputEl = document.querySelector("#reviewTitleInput");
  const reviewTitleLabelEl = document.querySelector("#reviewTitleLabel");
  const reviewCommentInputEl = document.querySelector("#reviewCommentInput");
  const reviewCommentLabelEl = document.querySelector("#reviewCommentLabel");
  const reviewRatingInputEl = document.querySelector("#reviewRatingInput");
  const reviewRatingLabelEl = document.querySelector("#reviewRatingLabel");
  const reviewErrorsEl = document.querySelectorAll("#reviewError");

  formReviewEl.addEventListener("submit", (event) => {
    event.preventDefault();
    checkValidation(formReviewEl);
  });

  function checkValidation(formEl) {
    reviewTitleValue = reviewTitleInputEl.value;
    reviewCommentValue = reviewCommentInputEl.value;
    reviewRatingValue = reviewRatingInputEl.value;
    console.log(reviewTitleValue, reviewCommentValue, reviewRatingValue);
    if (
      reviewTitleValue == "" ||
      reviewCommentValue == "" ||
      reviewRatingValue == ""
    ) {
      if (reviewRatingValue == "") {
        validateNull(reviewRatingInputEl, reviewRatingLabelEl, 2);
      } else {
        validateNotNull(reviewRatingInputEl, reviewRatingLabelEl, 2);
      }
      if (reviewCommentValue == "") {
        validateNull(reviewCommentInputEl, reviewCommentLabelEl, 1);
      } else {
        validateNotNull(reviewCommentInputEl, reviewCommentLabelEl, 1);
      }
      if (reviewTitleValue == "") {
        validateNull(reviewTitleInputEl, reviewTitleLabelEl, 0);
      } else {
        validateNotNull(reviewTitleInputEl, reviewTitleLabelEl, 0);
      }
    } else {
      formReviewEl.submit();
    }
  }

  function validateNull(inputElement, labelElement, errorIndex) {
    inputElement.classList.remove("border-gray-200");
    inputElement.classList.add("border-red-600");
    labelElement.classList.remove("text-gray-500");
    labelElement.classList.add("text-red-600");
    reviewErrorsEl[errorIndex].classList.remove("hidden");
    inputElement.focus();
  }

  function validateNotNull(inputElement, labelElement, errorIndex) {
    inputElement.classList.add("border-gray-200");
    inputElement.classList.remove("border-red-600");
    labelElement.classList.add("text-gray-500");
    labelElement.classList.remove("text-red-600");
    reviewErrorsEl[errorIndex].classList.add("hidden");
  }
}
