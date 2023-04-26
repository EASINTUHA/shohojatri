import "./styles.css";

const dropdown = document.getElementsByClassName("question");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let answers = this.nextElementSibling;
    if (answers.style.display === "block") {
      answers.style.display = "none";
    } else {
      answers.style.display = "block";
    }
  });
}
