const toastMessageEl = document.querySelector("#toastMessage");
const toastButtonEl = document.querySelector("#toastButton");

if (toastMessageEl) {
  if (toastMessageEl.textContent !== "") {
    setTimeout(() => {
      toastButtonEl.classList.add("hidden");
      //   toastButtonEl.classList.add("-translate-y-3");
    }, 3000);
    toastButtonEl.classList.remove("hidden");
  }
}
