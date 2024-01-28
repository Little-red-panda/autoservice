const form = document.querySelector(".contact-form");
const fromFieldset = document.querySelectorAll(".form__fieldset");
const formBtnPrev = document.querySelector(".form__btn--prev");
const formBtnNext = document.querySelector(".form__btn--next");
const formBtnSubmit = document.querySelector(".form__btn--submit");

let currentStep = 0;
const updateFieldsetVisibility = () => {
  for (let i = 0; i < fromFieldset.length; i++) {
    if (i === currentStep) {
      fromFieldset[i].classList.add("form__fieldset--active");
    } else {
      fromFieldset[i].classList.remove("form__fieldset--active");
    }
  }

  if (currentStep === 0) {
    formBtnPrev.style.display = "none";
    formBtnNext.style.display = "";
    formBtnSubmit.style.display = "none";
  } else if (currentStep === fromFieldset.length - 1) {
    formBtnPrev.style.display = "";
    formBtnNext.style.display = "none";
    formBtnSubmit.style.display = "";
  } else {
    formBtnPrev.style.display = "";
    formBtnNext.style.display = "";
    formBtnSubmit.style.display = "none";
  }
};

formBtnNext.addEventListener("click", () => {
  if (currentStep < fromFieldset.length - 1) currentStep += 1;
  updateFieldsetVisibility();
});

formBtnPrev.addEventListener("click", () => {
  if (currentStep > 0) currentStep -= 1;
  updateFieldsetVisibility();
});

updateFieldsetVisibility();
