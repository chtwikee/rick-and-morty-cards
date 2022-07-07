
const cardsRM = async () => {
    const BASE_URL = 'https://rickandmortyapi.com/api/character';
    let resp = await fetch(BASE_URL);
    let dataCards = await resp.json();

    // fetch(BASE_URL).then((response) => { return response }).then()

    return dataCards;
}

export { cardsRM }