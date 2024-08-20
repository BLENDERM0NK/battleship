const shipCount = 5;
const waterImageURL = "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/seamless-pattern-waves-various-shades-blue-vector-underwater-design-96891651_aSd5pmbaM.webp";
const shipImageURL = "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/battleship-image_e6bWCZ1w4.png";

// Fixing position of ships
const shipPositions = [1, 3, 5, 7, 9];

let clickCount = 0;
let shipsFound = 0;
let leftDisplay = document.querySelector('.left-side')
let rightDisplay = document.querySelector('.right-side')

const loadGameState = () => {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        const { savedClickCount, savedShipsFound, savedGridVisibility } = JSON.parse(savedState);
        clickCount = savedClickCount;
        shipsFound = savedShipsFound;  
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((gridItem, index) => {
            const img = gridItem.querySelector('img');
            img.style.display = savedGridVisibility[index];
        });
    }
}

const saveGameState = () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const gridVisibility = Array.from(gridItems).map(gridItem => gridItem.querySelector('img').style.display);
    const gameState = {
        savedClickCount: clickCount,
        savedShipsFound: shipsFound,
        savedGridVisibility: gridVisibility,
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

const createGridImage = () => {
    const gridItems = document.querySelectorAll('.grid-item');

    // Putting image in each grid
    gridItems.forEach((gridItem, index) => {
        gridItem.innerHTML = ''  //Clearing previous images
        const img = document.createElement('img');
        img.src = shipPositions.includes(index) ? shipImageURL : waterImageURL; //Giving image src based on index no.
        img.style.display = 'none';
        gridItem.appendChild(img); //Appending image to the each grid
    });
}

const handleClick = (event) => {
    const gridItem = event.currentTarget; //Targeting current grid
    const img = gridItem.querySelector('img');

    if (img.style.display === 'none') {
        img.style.display = 'block';
        clickCount++; // Increasing clickCount if a grid got clicked

        if (img.src.includes(shipImageURL)) {
            shipsFound++; // Increasing shipFound count if image src is shipImageURL
        }

        saveGameState();
        if (shipsFound === shipCount) {
            leftDisplay.innerHTML = "YOU"; // If you found the 5 ships then we are displaying a message that "YOU WON!"
            leftDisplay.style.backgroundColor = "green";
            rightDisplay.innerHTML = "WON!";
            rightDisplay.style.backgroundColor = "green";
            setTimeout(() => resetGame(), 2000) // It will reset the game in 2 sec

        } else if (clickCount >= 8) {
            leftDisplay.innerHTML = "DEVELOPER"; // If you are not able to find 5 ships in 8 clicks then we are displaying "DEVELOPER WON!"
            leftDisplay.style.backgroundColor = "red"
            rightDisplay.innerHTML = "WON!";
            rightDisplay.style.backgroundColor = "red"
            setTimeout(() => resetGame(), 2000);

        }
    }
}

const resetGame = () => { //After reseting the game all counts become 0 again 
    clickCount = 0;
    shipsFound = 0;
    leftDisplay.innerHTML = ""
    leftDisplay.style.backgroundColor = "";

    rightDisplay.innerHTML = "";
    rightDisplay.style.backgroundColor = "";
    createGridImage();
}

document.querySelectorAll('.grid-item').forEach(gridItem => {
    gridItem.addEventListener('click', handleClick);
});

document.querySelector('.reset-button').addEventListener('click', resetGame);

// First grid setup
createGridImage();
loadGameState();
