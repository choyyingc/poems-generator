function showPoem(response) {   
    //remove spinner
    let hidePrg = document.querySelector(".send");
    hidePrg.classList.remove("prg");
    
    //type the poem
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 15,
        cursor: '',
    });
}

function findPoem(event) {
    event.preventDefault();

    //show spinner
    let showPrg = document.querySelector(".send");
    showPrg.classList.add("prg");

    let theme = document.querySelector("#theme");
    let key = "35aeaec3e4b1co4afd93601d25bbdft0";
    let prompt = `Write a poem about ${theme.value}`;
    let context = "You are an English poet and you create 4-lines poems. Please create a new poem using the keyword provided. Each poem should have only 4 lines and each line is separated using <br>. At the end of the poem, add '<strong>by SheCodes AI</strong>'.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    //show the box
    let poemBox = document.querySelector("#poem");
    poemBox.classList.remove("react");

    //let user knows that it's generating
    new Typewriter("#poem", {
        strings: "Generating the poem for you now...",
        autoStart: true,
        loop: true,
        cursor: '',
    });

    //run the API
    axios.get(apiUrl).then(showPoem);
}

let poemGen = document.querySelector("#poem-generator");
poemGen.addEventListener('submit', findPoem);