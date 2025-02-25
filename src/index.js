function showPoem(response) {
    response.preventDefault();
    new Typewriter("#poem", {
        strings: 'And sorry I could not travel both',
        autoStart: true,
        delay: 15,
        cursor: '',
    });
}

let genPoem = document.querySelector("#poem-generator");
genPoem.addEventListener('submit', showPoem)