async function getData() {
    jokeBtn= document.getElementById("jokeBtn");
    showJoke= document.getElementById("showJoke");
    const url= "https://v2.jokeapi.dev/joke/Any?type=single&amount=10";
    try {
        const response= await fetch(url);
        if(!response.ok) {
            throw new Error("We could not the data");
        }

        const json= await response.json();
        jokeBtn.addEventListener("click", ()=> {
            const i= Math.floor(Math.random() * 10);
            showJoke.innerHTML= json.jokes[i].joke;
        });
    }
    catch(error) {
        console.error(error);
    }
}

getData();