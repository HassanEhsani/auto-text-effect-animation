const containerE1 = document.querySelector(".container");

const careers = ["YouTuber", "WebDeveloper", "Freelancer", "Instructor"];

let carreerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;

    containerE1.innerHTML = `<h1>I am a ${careers[carreerIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === careers[carreerIndex].length) {
        carreerIndex++;
        characterIndex = 0;
    }
    setTimeout(updateText, 400);
}

