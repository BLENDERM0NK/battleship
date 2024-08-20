# Battleship Game

This project is a simple Battleship game built using HTML, CSS, and JavaScript. The game challenges players to find hidden ships within a grid, with specific rules and a limited number of clicks.

## Features

- **Interactive Grid**: Click on grid cells to reveal hidden images.
- **Game State Persistence**: The game state (click count, ships found, and grid visibility) is saved in `localStorage`, so you can resume where you left off.
- **Win/Lose Condition**: Players win by finding all ships within 8 clicks. Otherwise, the game is lost.

## Game Rules

1. Click on the cells to reveal the hidden image behind them.
2. There are 5 ships hidden in the game.
3. You win if you find all the ships in less than 8 clicks; otherwise, you lose.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/BLENDERM0NK/battleship-game.git
2. Navigate to the project directory:
   ```bash
   cd battleship-game
## Usage

1. Open the `index.html` file in your web browser.

2. Click on the grid cells to start playing the game.

3. After 8 clicks or after finding all 5 ships, a message will be displayed to indicate whether you won or lost.

4. Click the "Reset Game" button to restart the game.
## Game Logic

- **Ship Placement**: The positions of the ships are fixed at the start of the game.
- **Click Handling**: Each click reveals the image behind a grid cell. The click count and the number of ships found are tracked.
- **Win/Lose Condition**: 
  - If the player finds all 5 ships within 8 clicks, a "YOU WON!" message is displayed.
  - If the player fails to find all ships within 8 clicks, a "DEVELOPER WON!" message is shown.
- **Game State Persistence**: The game's state (click count, ships found, grid visibility) is saved in `localStorage` and reloaded when the game is reopened.
## Error Handling

- The game state is saved and loaded from `localStorage`. If there is an issue with this process, the game might not remember the previous state after a page refresh or reopening the game.
- If the game state cannot be saved or loaded correctly, the game will still function, but without the ability to resume from the last session.
