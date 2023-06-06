const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show");
});

addBtn.addEventListener("click", e => {
  e.preventDefault();
  let noteTitle = titleTag.value,
  noteDesc = descTag.value;

  if(noteTitle || noteDesc){
    //trayendo la fecha -> dia, mes, año
    let dateObj = new Date();
    day = dateObj.getDate(),
    month = dateObj.getMonth(),
    year = dateObj.getFullYear();
    console.log(day, month,year);
  }
});