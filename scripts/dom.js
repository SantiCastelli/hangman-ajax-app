let DOM = {
    updateGuessedWord(guessedWord){
        document.querySelector("#puzzle").innerHTML = "";

    for (nextLetter of guessedWord) {
        console.log(nextLetter);
        const span = document.createElement("span");
        span.textContent = nextLetter;
        document.querySelector("#puzzle").appendChild(span); 
    }
    }

    
}