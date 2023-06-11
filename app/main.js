const socialIcons = Array.from(document.querySelectorAll(".logo-link"))
socialIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.add("animate__animated", "animate__bounce")
    console.log(icon.classList);
  })
})
socialIcons.forEach(icon => {
  icon.addEventListener("mouseleave", () => {
    icon.classList.remove("animate__animated", "animate__bounce")
    console.log(icon.classList);
  })
})
