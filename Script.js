let scale = 1;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", () => {
  scale += 0.3;
  yesBtn.style.transform = "scale(" + scale + ")";
});

yesBtn.addEventListener("click", () => {
  alert("Thank you Jency ❤️\nWelcome back to Sujan’s life 💖\nSujency is born ✨");
}); to
