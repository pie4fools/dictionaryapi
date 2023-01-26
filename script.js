const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            sound.setAttribute("src", `https://api.dictionaryapi.dev/media/pronunciations/en/${inpWord}-au.mp3`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
function playSound() {
    sound.play();
}

// This code is used to search for a word in the dictionaryapi.dev API and display the results on the page. 
// The url variable stores the base URL of the API. 
// The result, sound and btn variables store references to HTML elements on the page. 
// An event listener is added to the btn element which will be triggered when it is clicked. 
// When triggered, it will get the value of an input field with id "inp-word" and use it to make a fetch request to the API using the url variable and input value. 
// If successful, it will parse the response as JSON and update HTML elements with data from the response. 
// It will also set an audio source attribute with a pronunciation of the word from the API. 
// A playSound() function is also defined which will play this audio when called.