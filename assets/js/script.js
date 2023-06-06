const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["Enero", "Febrero", "Marzo","Abril",
                "Mayo", "Junio", "Julio", "Agosto",
               "Septiembre", "Octubre", " Noviembre", "Diciembre"];
// llamando de localStorage y analisando las notas
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show");
});

function showNotes(){
  notes.forEach((note) => {
    let liTag =
    `<li class="details">
      <div class="details">
        <p>${note.title}</p>
        <span>${note.description}</span>
      </div>
      <div class="bottom-content">
        <span>${note.date}</span>
        <div class="setting>
          <i class="uil uil-ellipsis-h"></i>
          <ul class="menu">
            <li><i class="uil uil-pen"></i>Editar</li>
            <li><i class="uil uil-trash"></i>Borrar</li>
          </ul>
        </div>
      </div>
    </li>`;
    addBox.insertAdjacentHTML("afterend", liTag);
  });
}

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
    const notes = [];
    notes.push(noteInfo); //agregando nueva nota
    localStorage.setItem("notes", JSON.stringify(notes));//guardando nota en localstorage
    closeIcon.click();
    showNotes();
  }
});