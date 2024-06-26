let book = document.querySelector(".book")
let bookPage = document.querySelectorAll(".bookPages");
let nextbtn = document.querySelectorAll(".nextbtn");
let prevbtn = document.querySelectorAll(".prevbtn");
let i = 4;
nextbtn.forEach((nextButton) => {
    nextButton.onclick = () => {
        console.log("Hello from next")
        if (i >= 0) {
            bookPage[i].style = `transform: rotateY(180deg); z-index: ${-i};`;
            i--;
        }
    };
});
prevbtn.forEach((prevButton) => {
    prevButton.onclick = () => {
        console.log("hello world")
        if (i < bookPage.length - 1) {
            i++;
            bookPage[i].style = "transform: rotateY(0deg);";
        }
    };
});
