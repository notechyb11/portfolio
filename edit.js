const editBtn = document.getElementById("editBtn");
const aboutText = document.getElementById("aboutText");

editBtn.addEventListener("click", () => {
  if (aboutText.isContentEditable) {
    aboutText.contentEditable = "false";
    editBtn.textContent = "Edit";
  } else {
    aboutText.contentEditable = "true";
    aboutText.focus();
    editBtn.textContent = "Save";
  }
});
