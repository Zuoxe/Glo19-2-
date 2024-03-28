const input = document.querySelector(".wrapper-input")
const paragrahp = document.querySelector(".warapper-paragraph")
const saveButton = document.querySelector(".wrapper__button")


const switchParagraph = () => {
    paragrahp.textContent = input.value


}

input.addEventListener("input", function () {
    setInterval(switchParagraph, 300)
})

saveButton.addEventListener("click", function () {
    switchParagraph();
})