function dropDown(button, content) {
  content.style.display = "none";
  let visible = false;

  function handleButtonClick() {
    if (!visible) {
      content.style.display = "block";
      visible = !visible;
    } else {
      content.style.display = "none";
      visible = !visible;
    }
  }
  function bindEvents() {
    button.addEventListener("click", () => handleButtonClick());
  }
  bindEvents();
}

module.exports = dropDown;
