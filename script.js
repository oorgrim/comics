




let currentCharacter = 1; 
const totalCharacters = 3; 

function changeCharacter(direction) {
    currentCharacter += direction;

    if (currentCharacter > totalCharacters) {
        currentCharacter = 1;
    } else if (currentCharacter < 1) {
        currentCharacter = totalCharacters;
    }

    document.getElementById("charImg").src = `char${currentCharacter}.png`;
    document.getElementById("charName").innerText = getCharacterName(currentCharacter);
    document.getElementById("charDescription").innerText = getCharacterDescription(currentCharacter);
    document.getElementById("charImg").src = getCharacterImage(currentCharacter);

}

function getCharacterImage(characterIndex) {
    switch (characterIndex) {
        case 1:
            return "IMG-8479.jpg";
        case 2:
            return "boy.jpg"; 
        case 3:
            return "char3.png"; 
        default:
            return "";
    }
}

function getCharacterName(characterIndex) {
    switch (characterIndex) {
        case 1:
            return "Erica";
        case 2:
            return "Eric";
        case 3:
            return "???";
        default:
            return "";
    }
}

function getCharacterDescription(characterIndex) {
    switch (characterIndex) {
        case 1:
            return "Against the backdrop of a broken city, a force rises – the look of a strong girl piercing the darkness of loss. Her eyes carry uncompromising determination, and her hair, developing under the wind of storms, symbolizes the indomitable energy of life. She bears the pain and loss, but in every wound there is a trace of a battle won by the power of the inner soul.";
        case 2:
            return "Eric is also one of the main characters, without whom the plot would be less interesting and exciting. Deleniti praesentium neque quisquam modi odit at ab quibusdam ipsa, excepturi omnis tenetur odio animi, voluptates sed?"
        case 3:
            return "Character 3 description.";
        default:
            return "";
    }
}


const faqs = document.querySelectorAll(".questions");
for (const item of faqs) {
const qua = item.childNodes; //дочернке уузлы
const question = qua[1];
const answer = qua[3];
const icon = question.querySelector(".icon-main");
icon.addEventListener("click", function () {
answer.classList.toggle("hide");
const i = icon.querySelector("i");
i.classList.toggle("fa-xmark"); //xmark это я взяла с сайта fontawesome
});
}

var getStartedLink = document.getElementById("sb");
var descText = document.getElementById("desc_txt");
getStartedLink.addEventListener("click", function() {
descText.scrollIntoView({ behavior: "smooth" });
});

