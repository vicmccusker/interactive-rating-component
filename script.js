const mainContainer = document.querySelector(".flex-item-1")
const thanksContainer = document.querySelector(".thank-you")

const submitButton = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")


submitButton.addEventListener("click", () => {
event.preventDefault()
thanksContainer.classList.remove("hidden")
mainContainer.style.display = "none"

})

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden")
  mainContainer.style.display = "block"
  submitButton.disabled = true
  
})


document.querySelectorAll(".button1").forEach(button => {
  button.addEventListener('click', () => {
    rating.innerHTML = button.value
    submitButton.disabled = false

  })

})


