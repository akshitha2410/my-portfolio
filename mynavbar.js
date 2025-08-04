
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.getElementById('typing');
  const text = "As a Frontend Developer and Java enthusiast, I am also advancing my knowledge through a degree in Electronics and Communication Engineering.";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // Typing speed
    }
  }

  typeEffect();
});
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

