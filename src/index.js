function showPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 15,
        cursor: '',
    });
}

function findPoem(event) {
    event.preventDefault();

    let theme = document.querySelector("#theme");
    let key = "35aeaec3e4b1co4afd93601d25bbdft0";
    let prompt = `Write a poem about ${theme.value}`;
    let context = "You are an English poet and you create 4-lines poems. Please create a new poem using the keyword provided. Each poem should have only 4 lines and each line is separated using <br>. At the end of the poem, add '<strong>by SheCodes AI</strong>'.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    console.log(`The context is ${context}`);
    console.log(`The prompt is ${prompt}`);
    console.log("Writing a poem for you now");

    axios.get(apiUrl).then(showPoem);
}

let poemGen = document.querySelector("#poem-generator");
poemGen.addEventListener('submit', findPoem)