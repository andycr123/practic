let currentPage = 1;

const getCharacters = (page, done) => {
    const results = fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

    results
        .then(response => response.json())
        .then(data => {
            done(data);
        });
};

const showCharacters = (data) => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    // console.log(main.innerHTML);
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/* html*/` 
            <article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="">
                </div>
                <h2>${personaje.name}</h2>
                <p>Status: ${personaje.status}</p>
                <p>Especie: ${personaje.species}</p>
                <p>Género: ${personaje.gender}</p>
            </article>`);
        main.append(article);
    });
};

const updatePage = (pageNumber) => {
    currentPage = pageNumber;
    getCharacters(currentPage, showCharacters);
};

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 1) {
        updatePage(currentPage - 1);
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    updatePage(currentPage + 1);
});
/* Nose que monda hizo pero algo hizo */
getCharacters(currentPage, showCharacters);





// const updatePage = (pageNumber) => {
//     currentPage = pageNumber;
//     getCharacters(currentPage, showCharacters);
// };

// document.getElementById('prevButon').addEventListener('click', ()=> {
//     if (currentPage > 1) {
//         updatePage(currentPage -1);
//     }
// });

// document.getElementById('nextButon').addEventListener('click', ()=> {
//     updatePage(currentPage +1);
// });