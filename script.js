async function loadInfo() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const randomCat = data[Math.floor(Math.random() * data.length)];

document.getElementById("infoText").innerHTML = `
  <h3>${randomCat.name}</h3>
  <p class="infoText">${randomCat.description}</p>
`;
    }
    catch (error) {
        console.error('Error fetching cat info:', error);
        document.getElementById("infoText").innerHTML = "Fehler beim Laden der Katzeninformationen.";
    }
}