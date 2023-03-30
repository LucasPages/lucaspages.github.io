let text_displayed = false;
let skill_displayed = "";

function displaySkillDescription(event) {
    const skill_string = event.target.classList[1].substring(3);
    const description = document.getElementsByClassName(`desc ${skill_string}`)[0];
    const prompt = document.getElementById("to-remove");

    if(text_displayed && skill_string !== skill_displayed) {
        const descriptionDisplayed = document.getElementsByClassName(`desc ${skill_displayed}`)[0];
        descriptionDisplayed.style.display = "none";
        description.style.display = "block";
        skill_displayed = skill_string;    
    }
    else if (text_displayed && skill_string === skill_displayed) {
        description.style.display = "none"
        prompt.style.display = "block";

        text_displayed = false;
    }
    else {
        prompt.style.display = "none";
        description.style.display = "block";
        
        text_displayed = true;
        skill_displayed = skill_string;
    }
}


// Events to animate the skills section

const python_item = document.getElementsByClassName("fa-python")[0];
python_item.addEventListener("click", displaySkillDescription);

const html_item = document.getElementsByClassName("fa-html5")[0];
html_item.addEventListener("click", displaySkillDescription);

const css_item = document.getElementsByClassName("fa-css3-alt")[0];
css_item.addEventListener("click", displaySkillDescription);

const js_item = document.getElementsByClassName("fa-js")[0];
js_item.addEventListener("click", displaySkillDescription);

const git_item = document.getElementsByClassName("fa-github")[0];
git_item.addEventListener("click", displaySkillDescription);



// Dark Mode

function switchButtonColor() {
    if (darkButton.innerHTML === "<i class=\"fa-regular fa-moon\"></i>") {
        darkButton.innerHTML = "<i class=\"fa-solid fa-moon\"></i>";
        darkButton.style.color = "black";
    }
    else {
        darkButton.innerHTML = "<i class=\"fa-regular fa-moon\"></i>";
        darkButton.style.color = "white";
    }
}

function switchMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    switchButtonColor();
    console.log(darkButton.innerHTML);
}

const darkButton = document.getElementById("dark-mode-button");
darkButton.onclick = switchMode;


// Dropdown menu

function showMenu(){
    menuContainer.style.display = "block";
}

function hideMenu() {
    menuContainer.style.display = "none";
}

const projectsButton = document.getElementById("project-link");
const menuContainer = document.getElementsByClassName("dropdown-content")[0];


projectsButton.onmouseover = showMenu;
menuContainer.onmouseleave = hideMenu;

