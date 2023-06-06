const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["Enero", "Febrero", "Marzo","Abril",
                "Mayo", "Junio", "Julio", "Agosto",
               "Septiembre", "Octubre", " Noviembre", "Diciembre"];

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
    month = months[dateObj.getMonth()],
    year = dateObj.getFullYear();

    let noteInfo ={
      title: noteTitle, description: noteDesc,
      date: `${day} ${month} ${year}`
    }

    console.log(noteInfo);
  }
});