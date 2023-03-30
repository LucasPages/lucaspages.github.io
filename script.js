let text_displayed = false;
let skill_displayed = "";

function displayDescription(event) {
    const skill_string = event.target.classList[1].substring(3);

    if(text_displayed) {
        const description = document.getElementsByClassName(`desc ${skill_string}`)[0];
        const prompt = document.getElementById("to-remove");

        if(skill_string !== skill_displayed) {
            const descriptionDisplayed = document.getElementsByClassName(`desc ${skill_displayed}`)[0];
            descriptionDisplayed.style.display = "none";
            description.style.display = "block";
            skill_displayed = skill_string;
        }
        else {
            description.style.display = "none"
            prompt.style.display = "block";
    
            text_displayed = false;
        }     
    }
    else {    
        const description = document.getElementsByClassName(`desc ${skill_string}`)[0];
        const prompt = document.getElementById("to-remove");

        prompt.style.display = "none";
        description.style.display = "block";
        
        text_displayed = true;
        skill_displayed = skill_string;
    }
}


const python_item = document.getElementsByClassName("fa-python")[0];
python_item.addEventListener("click", displayDescription);

const html_item = document.getElementsByClassName("fa-html5")[0];
html_item.addEventListener("click", displayDescription);

const css_item = document.getElementsByClassName("fa-css3-alt")[0];
css_item.addEventListener("click", displayDescription);

const js_item = document.getElementsByClassName("fa-js")[0];
js_item.addEventListener("click", displayDescription);

const git_item = document.getElementsByClassName("fa-github")[0];
git_item.addEventListener("click", displayDescription);
