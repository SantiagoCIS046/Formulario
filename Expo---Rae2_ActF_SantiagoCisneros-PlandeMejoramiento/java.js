document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("result").style.display = "block";
  document.getElementById("result").classList.add("result-message");

  // Desplazarse suavemente hacia el resultado
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
});
