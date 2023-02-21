const myImage = document.querySelector("img");
const myDescription = document.querySelector("figcaption");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/blobfish-surface.jpg") {
        myImage.setAttribute("src", "images/blobfish-underwater.webp");
        myDescription.textContent = `Blobfish di dasar laut`;
    } else {
        myImage.setAttribute("src", "images/blobfish-surface.jpg");
        myDescription.textContent = `Blobfish di daratan`;
    }
}

let myButton = document.querySelector("button");
let myQuestion = document.getElementById("question");

function setUserName() {
    const myName = prompt("Siapa namamu?");
    localStorage.setItem("name", myName);
    myQuestion.textContent = `Apakah ${myName} tahu, kalau blobfish adalah hewan terjelek sedunia?`;
    if (!myName) {
        setUserName();
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myQuestion.textContent = `Apakah ${storedName} tahu, kalau blobfish adalah hewan terjelek sedunia?`;
}

myButton.onclick = () => {
    setUserName();
}